import React, {Component} from 'react';
import "../Finances/Finances.css"

import FinancesTab from "../../components/FinancesTab/FinancesTab";
import Hamburgertab from '../../components/HamburgerTab';
import Header from "../../components/HeaderComponent/Header";

class Finances extends Component{
    
render(){
    return(
        <div>
        <Header />
        <Hamburgertab className="Hamburger-Component" />
        <FinancesTab className="FinancesTab-Component" />
        </div>
    )
}

}
export default Finances;