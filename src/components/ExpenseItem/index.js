import React, {Component} from 'react'
import "./expenseItem.css"
import PropTypes from 'prop-types';

class ExpenseItem extends Component{
    constructor(props){
        super(props);
            this.state={
                editing: false,
                price: this.props.item.price,
                date: this.props.item.date,
                category: this.props.item.category, 
                list: " ",
        }
    }

    toggleEditState = () => {
        this.setState({
            editing: true,
        })
    }

    toggleSaveState = () => {
        this.setState({
            editing: !this.state.editing,
        })
    }

    updateUserInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
        })
        console.log("price", e.target.value)
     }
    
    handleSubmit = () => {
        const { price, date, category} = this.state;
        const itemId = this.props.item.itemId;
        const purchase = {price, date, category, itemId} 
        console.log("purchase", purchase);
    this.props.handleEdit(purchase)
    this.toggleEditState()
    }
    
    // this.props.handleEdit(this.props.item)

    render(){
        return(
            <div className="item-container" key={this.props.uniqueId}>
               {!this.state.editing ? 
                <div>
                    <div>category: {this.state.category}</div>
                    <div>date: {this.state.date}</div>
                    <div>price: {this.state.price}</div>
                    <div onClick={() => this.toggleEditState()} type="edit">edit</div>
                </div> 
                : 
                <div>              
                    <form className="inputs" >
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
                    <button type="submit" onClick={() => this.handleSubmit}>Submit</button>
                </form>
                </div>
               }
            </div>
        )
    }
}

ExpenseItem.propTypes = {
price: PropTypes.number

}

export default ExpenseItem;