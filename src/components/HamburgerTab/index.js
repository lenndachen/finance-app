import React, {Component} from 'react';
import './HamburgerTab.css'
import { Link } from 'react-router-dom'

export default class HamburgerTab extends Component{
    render(){
        return(
            <div className='square'>
                <h1 className="hidden"><Link to="/">gregdf</Link></h1>
                <h1 className='intro'><Link to="/">Dashboard</Link></h1>
                <h1 className='intro'><Link to="/finances">Finances</Link></h1>
                <h1 className='intro'><Link to="/budget">Budget</Link></h1>
                <h1 className='intro'><Link to="/enterdata">Enter Data</Link></h1>
            </div>
        )
    }
}
