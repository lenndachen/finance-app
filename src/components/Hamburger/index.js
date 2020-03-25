import React, {Component} from 'react';
import './Hamburgertab.css'
import { Link } from 'react-router-dom'

export default class Hamburgertab extends Component{
    render(){
        return(
            <div className='square'>
                <h1 className="hidden"><Link>gregdf</Link></h1>
                <h1 className='intro'><Link to="/">Dashboard</Link></h1>
                <h1 className='intro'>Finances</h1>
                <h1 className='intro'>Budget</h1>
                <h1 className='intro'>Enter Data</h1>
            </div>
        )
    }
}
