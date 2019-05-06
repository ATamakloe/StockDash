import React from 'react';
import './SavedStock.css';

const SavedStock = ({symbol, price, loadSavedStock, deleteSavedStock}) => {
  return (
    <li className="savedstock" tabIndex="0">
      <span className="symbolandprice" onClick={() => loadSavedStock(symbol)}>{symbol}: {price}</span>
      <button className="delete" onClick={() => deleteSavedStock(symbol)}>X</button>
    </li>
  )
}

export default SavedStock;
