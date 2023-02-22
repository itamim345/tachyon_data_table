import React from 'react';
import "../Common.css"

export default function OrderBook() {
  return (
    <div id="order_book">
      <div className="order-book-intro">
        <div className="intro-left">
          <h2>Orderbook - Audi B1</h2>
          <span className="toogle-btn">
            Hide <i class="ri-arrow-down-s-line"></i>
          </span>
        </div>
        <button id="exit-btn">EXIT AUDI B1</button>
      </div>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Symbol</th>
            <th>Order no</th>
            <th>Type</th>
            <th>Strategy</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10:02:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>Exit</td>
            <td>Audi B1</td>
            <td>50</td>
            <td></td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>09:59:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>Exit</td>
            <td>Audi B1</td>
            <td>50</td>
            <td></td>
            <td>Rejected</td>
          </tr>
          <tr>
            <td>09:59:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>Exit</td>
            <td>Audi B1</td>
            <td>2350</td>
            <td>80</td>
            <td>COMPLETE</td>
          </tr>
          <tr>
            <td>09:59:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>Exit</td>
            <td>Audi B1</td>
            <td>2400</td>
            <td>80</td>
            <td>COMPLETE</td>
          </tr>
          <tr>
            <td>09:29:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>ENTRY</td>
            <td>Audi B1</td>
            <td>2400</td>
            <td>120</td>
            <td>COMPLETE</td>
          </tr>
          <tr>
            <td>09:29:00</td>
            <td>BANKNIFTY220CT2100PE</td>
            <td>1</td>
            <td>ENTRY</td>
            <td>Audi B1</td>
            <td>2400</td>
            <td>120</td>
            <td>COMPLETE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
