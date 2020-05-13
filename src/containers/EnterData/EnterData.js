import React, {Component} from 'react'

import Header from '../../components/HeaderComponent/Header.js';
import HamburgerTab from '../../components/HamburgerTab/index';
import EnterDataTab from "../../components/EnterDataTab/index";
import ExpenseItem from "../../components/ExpenseItem/index"
// import SearchForm from '../../components/SearchForm/index.js';

import "./EnterData.css";
const CATEGORIES = ['Food', 'Entertainment']
class EnterData extends Component{
    constructor(props){
        super(props);
            this.state={
                // all expenses in container
                allExpenses: [],
                eachExpense: {},
                totalPrice: [],
                edit: false,
                filterExpense: [],
                activeFilter: "",
        }
    }

    filterExpenses = () => {
        var allExpenses = this.state.allExpenses;
        const filteredExpenses = allExpenses.filter(expense => expense.category === this.state.activeFilter)
        this.setState({
            filterExpense: filteredExpenses,
        },() => { 
            this.calculateExpenses()
        } )
    }

    // Submit function 
    handleSubmit = (purchase) => {  
        console.log("purchase 3", purchase)
        purchase.itemId = this.state.allExpenses.length + 1;
        const array = this.state.allExpenses;
        array.push(purchase)
        // + and + make addition work, array.reduce makes the adding possible, accum/item are variables
        // Finished adding but want to render amount on page now
          this.setState({
            allExpenses: array,
            filterExpense: this.state.allExpenses,
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
    // pluck out item that matches the item ID
    // map through expenses and match the expense that has the same id as purchase id
    // filter, splice* find location, remove the item from array from all expenses that matches
    // const result = allExpenses.filter(purchase => purchase !== allExpenses)
    // // allExpenses.pop()
    // allExpenses.push(purchase)
    // console.log("result", result)
    // console.log("all Expenses", allExpenses)

    // onEdit = () => {
    //     var expenses = this.state.allExpenses;
    //     expenses.pop()
    //     console.log("expenses",expenses)
    // }

    render(){
        console.log("purchase", this.state.allExpenses)
        const data = this.state.filterExpense;
        //adds the total price of everything
        const totalItemsPrice = this.state.totalPrice;
        const filterButtons = CATEGORIES.map(category => <div>{category}</div>) 
        return(
            <div>
                <Header />
                <HamburgerTab/>
                <div>

                </div>
                <div>
                    <EnterDataTab submitButton={this.handleSubmit} array = {this.state.array} /> 
                <div className="filters">
                    {/* onclick */}
                    {filterButtons}    
                </div>               
                <div className="showing-data">
                    {/* Renders data from state, is in console too */}
                    {/* Put edit button inside <p> tag which makes it render each time  */}
                    {data && data.map((d, uniqueId) => 
                    <ExpenseItem 
                        item={d} 
                        keyItem={uniqueId} 
                        handleEdit={this.handleEdit} 
                        allExpenses={this.state.allExpenses}
                    // onEdit = {this.onEdit}
                    />
                   )}
                    {/* Got Grand Total to print on Screen */}
                    Grand Total: {totalItemsPrice}
                </div>
                </div>
            </div>
        )

    }
}

export default EnterData;
