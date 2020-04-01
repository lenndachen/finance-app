import React, {Component} from 'react';

export default class EnterDataTab extends Component{
    constructor(props){
        super(props);

    this.state={
        userInput:" "
    }
}

updateUserInput = (e) =>{
    this.setState=({
        userInput: e.target.value
    })
 }

    render(){
        return(
            <div>
                <input defaultValue={this.state.userInput} onChange={e => this.updateUserInput(e)}/>
            </div>
        )
    }
}

