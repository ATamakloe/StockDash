import React from 'react';
import './SavedStock.css';

const SavedStock = ({symbol, price, loadSavedStock, deleteSavedStock}) => {
  return (
    <li className="savedstock"  onClick={() => loadSavedStock(symbol)} tabIndex="0">
      <span className="symbolandprice" >{symbol}: {price}</span>
      <button className="delete" onClick={() => deleteSavedStock(symbol)}>X</button>
    </li>
  )
}

export default SavedStock;
