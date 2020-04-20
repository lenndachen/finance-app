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
                <div>
                    {this.state.array}
                </div>
            
            </div>
        )
    }
}

export default EnterData;