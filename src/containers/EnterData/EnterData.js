import React, {Component} from 'react'

import Header from '../../components/HeaderComponent/Header.js';
import HamburgerTab from '../../components/HamburgerTab/index';
import EnterDataTab from "../../components/EnterDataTab/index";
// import SearchForm from '../../components/SearchForm/index.js';
class EnterData extends Component{
    constructor(props){
        super(props);
            this.state={
                // all expenses in container
                allExpenses: [],
                eachExpense: {},
        }
    }

    // Submit function 
    handleSubmit = (purchase) => {  
        console.log("purchase 3", purchase)
        let array = this.state.allExpenses;
        array.push(purchase)
        this.setState({
            array: array,
        })
    console.log("array", array)
    }

    // useEffect = (e) => {
    //     const value = e.target.value;
    //     const timeout = setTimeout(() => {
    //       this.setOutput(value);
    //     }, 200);
    //     return () => {
    //       clearTimeout(timeout);
    //     };
    //   }

    // setOutput = () => {
    //    const array = this.state.allExpenses;
    //    console.log("array", array)
    // }
      
    // submitItems = () => {
    //     const count = (this.state.array(0))
    //     const count2 = (this.state.array[1])
    //     const count3 = (this.state.array[2])
    //     const count4 = [{...count, ...count2, ...count3}]
    //     const count5 = count4.push(this.state.allExpenses)
    //     console.log("count 5", count5)
    // }

    submitInput = () => {
        return(
            <input type="button" value="Submit" name="submit" onClick={this.handleSubmit}/>
        )
    }

    // performSearch = (query) => {
          
    //   }
 
    render(){
        console.log("purchase", this.state.allExpenses)
        return(
            <div>
                <Header />
                <HamburgerTab/>
                <div>
                    <EnterDataTab submitButton={this.handleSubmit}/>
                </div>
                {/* submitItemCount={this.submitItems()}  */}
                {/* delayedUpdate={this.useEffect} */}
                <div>
                    {/* <SearchForm onSearch={this.performSearch} />   */}
                </div>
            
            </div>
        )
    }
}

export default EnterData;