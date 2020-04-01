import React, {Component} from 'react';

import "./BudgetTab.css"

export default class Budget extends Component{
    render(){
        return(
            <div className="budget">
                <div className="budget-title">
                    <h2 className="budget-h2">Budget</h2>
                </div>
                    <div className="budget-background">
                        <div className="budget-graph">
                            <div className="January"></div>
                            <div className="Febuary"></div>
                            <div className="March"></div>
                            <div className="April"></div>
                        </div>
                    </div>                   
            </div>
        )
    }
}