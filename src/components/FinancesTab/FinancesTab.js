import React from 'react';
import "./FinancesTab.css"

const FinancesTab = () => {
    return (
        <div className="finances-menu">
            <div>
                <h2 className="finances-header">Finances</h2>
            </div>
            <div className="finances-column">
            <div className="finances-column-1">
                <ul>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                </ul>
            </div>
            <div className="finances-column-2">
                <ul>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                    <li className="purchase-date">Aug. 21</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default FinancesTab;