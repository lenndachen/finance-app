import React, {Component} from 'react';
import "../Finances/Finances.css"


import HamburgerTab from '../../components/HamburgerTab';
import Header from "../../components/HeaderComponent/Header";
import BudgetTab from "../../components/BudgetTab/index";
class Budget extends Component{
    
render(){
    return(
        <div>
        <Header />
        <HamburgerTab className="Hamburger-Component" />
        <BudgetTab className="BudgetTab-Component" />
        </div>
    )
}

}
export default Budget;