import React, {Component} from 'react';

import "./EnterDataTab.css"
export default class EnterDataTab extends Component{
    constructor(props){
        super(props);
        // this.listOfData = this.listOfData.bind(this);
    this.state={
        price: " ",
        date: "yyyy-MM-dd",
        category: " ", 
    }
}

// sets the state of prices on input
updateUserInput = (e) =>{
    this.setState({
        [e.target.name]: e.target.value,
    })
    console.log("price", e.target.value)
 }

handleSubmit = () => {
        const { price, date, category} = this.state;
        const purchase = {price, date, category}
        console.log("purchase", purchase);
    this.props.submitButton(purchase)
    this.defaultState()
}

defaultState = () => {
    this.setState({
    price: " ",
    date: "yyyy-MM-dd",
    category: "",
    }) 
}


    render(){
        return(
            <div>
                {/* form userinputs items 
                onSubmit={this.props.submitItemCount} */}
                <form className="inputs">
                    {/* this.props.delayedOutput */}
                    <input type="price" pattern="[0-9]*" name="price" value={this.state.price} onChange={this.updateUserInput}/>
                    <input type="date" name="date" value={this.state.date} onChange={this.updateUserInput}/>
                    <select type="text" name="category" value={this.state.category} onChange={this.updateUserInput}>
                        <option type="text" name="category" value="food">Category</option>
                        <option type="text" name="category" value="food">Eating Out</option>
                        <option type="text" name="category" value="gas">Gas</option>
                        <option type="text" name="category" value="entertainment">Entertainment</option>
                        <option type="text" name="category" value="grocery">Grocery's</option>
                        <option type="text" name="category" value="other">Other</option>
                    </select>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
                
            </div>
        )
    }
}