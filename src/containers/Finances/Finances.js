import React, {Component} from 'react';
import "../Finances/Finances.css"

import FinancesTab from "../../components/FinancesTab/FinancesTab";
import Hamburgertab from '../../components/Hamburger';
import Header from "../../components/Header/Header";

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