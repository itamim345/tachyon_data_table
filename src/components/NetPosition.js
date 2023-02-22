import React from 'react';
import "../Common.css"

export default function NetPosition() {
  return (
    <div id='net_position'>
        <h2>Net Positions - Audi B1 (Demo)</h2>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Symbol</th>
                    <th>LTP</th>
                    <th>MTM</th>
                    <th>Qty</th>
                    <th>Strategy</th>
                    <th>Buy</th>
                    <th>Sell</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BANKNIFTY220CT2100CE</td>
                    <td>0.05</td>
                    <td>72,000</td>
                    <td>0</td>
                    <td>Audi B1</td>
                    <td>80</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>BANKNIFTY220CT2100PE</td>
                    <td>0.1</td>
                    <td>99,950</td>
                    <td>-50</td>
                    <td>Audi B1</td>
                    <td>90</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>Day's PNL</td>
                    <td></td>
                    <td>1,71,950</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Net PNL</td>
                    <td></td>
                    <td>1,70,000</td>
                    <td><button id="exp-btn">Show Expense</button></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}
