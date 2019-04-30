import React from 'react';
import './SavedStock.css';

const SavedStock = ({symbol, price, loadSavedStock, deleteSavedStock}) => {
  return (
    <li className="savedstock" tabIndex="0">
      <p className="symbolandprice" onClick={() => loadSavedStock(symbol)}>{symbol}: {price}</p>
      <button className="delete" onClick={() => deleteSavedStock(symbol)}>X</button>
    </li>
  )
}

export default SavedStock;
