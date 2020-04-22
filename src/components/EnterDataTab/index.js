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
        list: " ",
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

//  renderList = (list) => {
//     list.array.map((item) => (
//         <div>[
//           <p>{item.price}</p>
//           <p>{item.date}</p>
//           <p>{item.category}</p>
//         ]
//         </div>
//       ))
//     this.setState({
//         list: list,
//    })
//   }

    render(){
        // {this.renderList(this.state.list)}
        return(
            <div>
                {/* form userinputs items 
                onSubmit={this.props.submitItemCount} */}
                <form className="inputs">
                    {/* this.props.delayedOutput */}
                    <select type="text" name="category" value={this.state.category} onChange={this.updateUserInput}>
                        <option type="text" name="category" value="food">Category</option>
                        <option type="text" name="category" value="eating out">Eating Out</option>
                        <option type="text" name="category" value="gas">Gas</option>
                        <option type="text" name="category" value="entertainment">Entertainment</option>
                        <option type="text" name="category" value="grocery">Grocery's</option>
                        <option type="text" name="category" value="other">Other</option>
                    </select>
                    <input type="date" name="date" value={this.state.date} onChange={this.updateUserInput}/>
                    <input type="price" pattern="[0-9]*" name="price" value={this.state.price} onChange={this.updateUserInput}/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}