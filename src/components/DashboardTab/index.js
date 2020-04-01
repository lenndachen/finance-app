import React, {Component} from 'react';

import "./Dashboard.css"

export default class DashboardTab extends Component{
    render(){
        return(
            <div className="dashboard">
                <div className="dashboard-title">
                    <h2 className="dashboard-h2">Dashboard</h2>
                </div>
                <div className="all-charts">
                    <div>
                    <p className="monthly">Monthly Expenses</p>
                    <div className="pie"> 
                    </div>
                    </div>
                    <div className="all-four">
                        <div className="chart">
                            <div className="graph">
                                <div className="week-1"></div>
                                <div className="week-2"></div>
                                <div className="week-3"></div>
                                <div className="week-4"></div>
                            </div>                   
                        </div>
                        <div className="chart">
                            <div className="graph">
                                <div className="week-1"></div>
                                <div className="week-2"></div>
                                <div className="week-3"></div>
                                <div className="week-4"></div>
                            </div>                   
                        </div><div className="chart">
                            <div className="graph">
                                <div className="week-1"></div>
                                <div className="week-2"></div>
                                <div className="week-3"></div>
                                <div className="week-4"></div>
                            </div>                   
                        </div><div className="chart">
                            <div className="graph">
                                <div className="week-1"></div>
                                <div className="week-2"></div>
                                <div className="week-3"></div>
                                <div className="week-4"></div>
                            </div>                   
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}