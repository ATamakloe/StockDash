import React from 'react'
import './SavedStockList.css';
import SavedStock from '../SavedStock/SavedStock';

const SavedStockList = ({savedstocks, loadSavedStock, deleteSavedStock}) => {
  let stocklistbody = savedstocks.length === 0 ? <li className="savedstock">Stocks you save go here</li> :
  savedstocks.map((stocks,i) => <SavedStock key={i} loadSavedStock={loadSavedStock} deleteSavedStock={deleteSavedStock} symbol={stocks.symbol} price={stocks.price}/>)

  return (
    <ul>
    <li className="savedstockheader">Saved Stocks</li>
    {stocklistbody}
    </ul>
  )
}

export default SavedStockList;
