import React from 'react';
import "./FinancesTab.css"

const FinancesTab = () => {
    return (
        <div className="finances-menu">
            <div>
                <h2 className="finances-header">Finances</h2>
            </div>
            <div className="finances-column-1">
                <ul>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                </ul>
            </div>
            <div className="finances-column-2">
                <ul>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                    <li>Aug. 21</li>
                </ul>
            </div>
        </div>
    )
}

export default FinancesTab;