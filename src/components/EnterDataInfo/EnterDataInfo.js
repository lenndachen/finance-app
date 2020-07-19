import React, {Component} from 'react'
import Header from '../HeaderComponent/Header.js';
import HamburgerTab from '../HamburgerTab/index';
import EnterDataTab from "../EnterDataTab/index";
import ExpenseItem from "../ExpenseItem/index"
// import SearchForm from '../../components/SearchForm/index.js';

import "./EnterDataInfo.css";

const CATEGORIES = ['Eating Out', 'Gas' , 'Entertainment',  "Grocery", 'Other', 'All']
class EnterDataInfo extends Component{
    constructor(props){
        super(props);
            this.state={
                // all expenses in container
                allExpenses: [],
                eachExpense: {},
                totalPrice: [],
                edit: false,
                filteredExpenses: [],
                activeFilter: "",
                filtered: true,
                filteredPrice: [],
        }
    }

    toggleFilterState = () => {
        this.setState({
            filtered: true,
        })
    }

    toggleFilterSaveState = () => {
        this.setState({
            filtered: !this.state.filtered,
        })
    }

    filterExpenses = (category) => {
        this.toggleFilterSaveState()
        console.log("this.state.filtered", this.state.filtered)
        var allExpenses = this.state.allExpenses;
        // var filteredExpenses = this.state.filteredExpenses
        console.log("category", category) 
        if(category.toLowerCase() === "all"){
             this.setState({
                 filteredExpenses: allExpenses,
             })
            console.log("this.state.filtered", this.state.filtered)
            this.calculateExpenses()
        } else {
        this.toggleFilterState()
        console.log("this.state.filtered", this.state.filtered)
        const filteringExpenses = allExpenses.filter(expense => expense.category.toLowerCase() === category.toLowerCase()) 
        this.setState({
            filteredExpenses: filteringExpenses,
        },() => { 
            this.calculateFilteredExpenses()
        }
         )}
    }

    // Submit function 
    handleSubmit = (purchase) => {  
        console.log("purchase 3", purchase)
        // is line 64 needed and why
        purchase.itemId = this.state.allExpenses.length + 1;
        const array = this.state.allExpenses;
        array.push(purchase)
        // + and + make addition work, array.reduce makes the adding possible, accum/item are variables
        // Finished adding but want to render amount on page now
          this.setState({
            allExpenses: array,
            filteredExpenses: this.state.allExpenses,
        })
    console.log("array", array)
        this.calculateExpenses()
    }

    calculateExpenses = () => {
        var totalPrice = this.state.allExpenses.reduce((accum,item) => +accum + +item.price, 0)
        this.setState({
            totalPrice: totalPrice,
        })
    }

    calculateFilteredExpenses = () => {
        console.log("filterExpenses at calculateFilteredExpense", this.state.filterExpenses)
        var filteredPrice = this.state.filteredExpenses.reduce((accum,item) => +accum + +item.price, 0)
        this.setState({
            totalPrice: filteredPrice,
        })
    }

    submitInput = () => {
        return(
            <input type="button" value="Submit" name="submit" onClick={this.handleSubmit}/>
        )
    }

    handleEdit = (purchase) => {
        var allExpenses = this.state.allExpenses;
        console.log("purchase, and all expenses", purchase, allExpenses)
        const spliceExpenses = allExpenses.filter(expense => expense.itemId !== purchase.itemId)
        console.log("spliceExpenses", spliceExpenses)
        spliceExpenses.push(purchase)
        this.setState({
            allExpenses: spliceExpenses,
        },() => { 
            this.calculateExpenses()
        } )
    }

    deleteExpense = (deletedExpense) => {
        console.log("deletedExpense", deletedExpense)
        var allExpenses = this.state.allExpenses;
        const spliceExpenses = allExpenses.filter(expense => expense.itemId !== deletedExpense.itemId)
        this.setState({
            allExpenses: spliceExpenses,
            filteredExpenses: spliceExpenses, 
        },() => { 
            this.calculateExpenses()
        } )
}

// this.toggleFilterState();

    render(){
        console.log("purchase", this.state.filteredExpenses)
        const data = this.state.filteredExpenses;
        //adds the total price of everything
        const totalItemsPrice = Number(this.state.totalPrice).toFixed(2);
        const totalFilteredPrice = Number(this.state.totalPrice).toFixed(2);
        const filterButtons = CATEGORIES.map(category => <div className="category-div">{category} <button className="category-button" onClick= {() => this.filterExpenses(category)}>Click
        </button><span>   </span> </div>) 
        return(
            <div>
                <Header />
                <HamburgerTab/>
                <div>
                    <div className="filters">{filterButtons}</div> 
                    <EnterDataTab submitButton={this.handleSubmit}/> 
                <div className="finances-column-1">
                <ul className="purchase-date">
                    {/* Got Grand Total to print on Screen */}
                    <div className="totalPrice">
                    {!this.state.filtered ?
                    <div> Grand Total: {totalItemsPrice} </div>
                    :
                    <div> Grand Total: {totalFilteredPrice} </div>
                    }
                    {console.log("totalFilteredPrice", totalFilteredPrice)}
                    {console.log("totalItemsPrice", totalItemsPrice)}
                    </div>
                    <div className="price">
                    {/* Renders data from state, is in console too */}
                    {/* Put edit button inside <p> tag which makes it render each time  */}
                    {data && data.map((d, uniqueId) => 
                    <ExpenseItem 
                        item={d} 
                        keyItem={uniqueId} 
                        handleEdit={this.handleEdit} 
                        allExpenses={this.state.allExpenses}
                        deleteExpense={this.deleteExpense} 
                        id={d.purchased}
                    />
                   )}
                </div>
                </ul>
                </div>
                </div>
            </div>
        )

    }
}

export default EnterDataInfo;
