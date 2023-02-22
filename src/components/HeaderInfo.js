import React from 'react';
import "../Common.css"
export default function HeaderInfo() {
  return (
    <div id='header_info'>
      <h2>Live</h2>
      <p>
        <span>Data: 27.10.2022, </span>
        <span>Time: 09:29:35, </span>
        <span>Nifty: 17,730, </span>
        <span>BankNifty: 42,199 </span>
      </p>
      <hr />
      <div className="buttons">
        <button>
            <span>
                <b>All</b>
                <b>4,23,800</b>
            </span>
            <b>&gt;</b>
        </button>
        <button>
            <span>
                <b>Audi B1</b>
                <b>1,71,950</b>
            </span>
            <b>&gt;</b>
        </button>
        <button>
            <span>
                <b>Super 20</b>
                <b>2,53,800</b>
            </span>
            <b>&gt;</b>
        </button>
      </div>
    </div>
  );
}
