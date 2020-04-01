import React, {Component} from 'react'

import Header from '../../components/HeaderComponent/Header.js';
import HamburgerTab from '../../components/HamburgerTab/index';
import EnterDataTab from "../../components/EnterDataTab/index";
class EnterData extends Component{
    render(){
        return(
            <div>
            <Header />
            <HamburgerTab/>
            <EnterDataTab />
            </div>
        )
    }
}

export default EnterData;