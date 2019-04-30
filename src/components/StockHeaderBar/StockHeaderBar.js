import React, { memo } from 'react';
import './StockHeaderBar.css';
import Loading from '../Loading/Loading';

const StockHeaderBar = ({info, addSavedStock}) => {
  let stockheaderbody = info === null ? <Loading/> :
  <>
  <div className="headerrow1">
  <h2 className="stockname">{info.name} <span>({info.symbol})</span></h2>
    <button onClick={() => addSavedStock(info.symbol)} className="savestock">Save {info.symbol}</button>
    </div>
    <div className="headerrow2">
  <p className="stockprice">{info.price} USD</p>
  </div>
  <div className="headerrow3">
 <button className="tab">Todays Prices</button>
  </div>
  </>

    return (
      <div className="StockHeaderBar">
        {stockheaderbody}
      </div>
    )

  }


export default memo(StockHeaderBar);
