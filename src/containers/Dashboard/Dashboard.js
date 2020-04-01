import React, {Component} from 'react'

import Header from '../../components/HeaderComponent/Header.js';
import Hamburgertab from '../../components/HamburgerTab/index';
import DashboardTab from '../../components/DashboardTab/index';

class Dashboard extends Component{
    render(){
        return(
            <div>
            <Header />
            <Hamburgertab/>
            <DashboardTab />
            </div>
        )
    }
}

export default Dashboard;