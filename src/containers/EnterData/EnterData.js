import React, {Component} from 'react'

import Header from '../../components/HeaderComponent/Header.js';
import HamburgerTab from '../../components/HamburgerTab/index';
import EnterDataTab from "../../components/EnterDataTab/index";
import ExpenseItem from "../../components/ExpenseItem/index"
// import SearchForm from '../../components/SearchForm/index.js';

import "./EnterData.css";
class EnterData extends Component{
    constructor(props){
        super(props);
            this.state={
                // all expenses in container
                allExpenses: [],
                eachExpense: {},
                totalPrice: [],
                edit: false,
        }
    }

    // Submit function 
    handleSubmit = (purchase) => {  
        console.log("purchase 3", purchase)
        purchase.itemId = this.state.allExpenses.length + 1;
        const array = this.state.allExpenses;
        array.push(purchase)
        // + and + make addition work, array.reduce makes the adding possible, accum/item are variables
        // Finished adding but want to render amount on page now
          var totalPrice = array.reduce((accum,item) => +accum + +item.price, 0)
          this.setState({
            allExpenses: array,
            totalPrice: totalPrice,
        })
    console.log("array", array)
    console.log("total", totalPrice)
    }

    submitInput = () => {
        return(
            <input type="button" value="Submit" name="submit" onClick={this.handleSubmit}/>
        )
    }

    handleEdit = (purchase) => {
        var allExpenses = this.state.allExpenses;
        console.log("purchase, and all expenses", purchase, allExpenses)
        // pluck out item that matches the item ID
        // map through expenses and match the expense that has the same id as purchase id
        // filter, splice* find location, remove the item from array from all expenses that matches
        const result = allExpenses.filter(purchase => purchase !== allExpenses)
        // allExpenses.pop()
        allExpenses.push(purchase)
        console.log("result", result)
        console.log("all Expenses", allExpenses)
    }

    onEdit = () => {
        var expenses = this.state.allExpenses;
        expenses.pop()
        console.log("expenses",expenses)
    }

    render(){
        console.log("purchase", this.state.allExpenses)
        const data = this.state.allExpenses;
        //adds the total price of everything
        const totalItemsPrice = this.state.totalPrice;
        return(
            <div>
                <Header />
                <HamburgerTab/>
                <div>

                </div>
                <div>
                    <EnterDataTab submitButton={this.handleSubmit} array = {this.state.array} />                
                <div className="showing-data">
                    {/* Renders data from state, is in console too */}
                    {/* Put edit button inside <p> tag which makes it render each time  */}
                    {data && data.map((d, uniqueId) => 
                    <ExpenseItem 
                    item={d} keyItem={uniqueId} handleEdit={this.handleEdit} allExpenses={this.state.allExpenses}
                    onEdit = {this.onEdit}
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

////////// //Initailize array of objects.
// Code shows how to edit expense
// let myArray = [
//     {id: 0, name: "Jhon"},
//     {id: 1, name: "Sara"},
//     {id: 2, name: "Domnic"},
//     {id: 3, name: "Bravo"}
//   ],
      
//   //Find index of specific object using findIndex method.    
//   objIndex = myArray.findIndex((obj => obj.id == 1));
  
//   //Log object to Console.
//   console.log("Before update: ", myArray[objIndex])
  
//   //Update object's name property.
//   myArray[objIndex].name = "Laila"
  
//   //Log object to console again.
//   console.log("After update: ", myArray[objIndex])
