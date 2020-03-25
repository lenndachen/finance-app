import React, {Component} from 'react'

import Header from '../components/Header/Header.js';
import Hamburgertab from '../components/Hamburger/index';

class Dashboard extends Component{
    render(){
        return(
            <div>
            <Header />
            <Hamburgertab/>
            </div>
        )
    }
}

export default Dashboard;