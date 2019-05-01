import React from 'react'
import './StockInfoBar.css';
import StockInfoItem from '../StockInfoItem/StockInfoItem';

const StockInfoBar = ({financials}) => {
  let labelarr = ["Open","Close","Volume","MKT Cap","EPS","Beta","P/E","Yield","1YR"];
  let dataarr = [financials.open,financials.previous_close,financials.avg_volume,financials.market_cap,financials.eps,financials.beta,financials.pe_ratio,financials.forward_dividend_yield,financials.week_52_range];
  return (
    <div className="infobar">
      <StockInfoItem labels={labelarr.slice(0,3)} data={dataarr.slice(0,3)}/>
      <StockInfoItem labels={labelarr.slice(3,6)} data={dataarr.slice(3,6)}/>
      <StockInfoItem labels={labelarr.slice(6,9)} data={dataarr.slice(6,9)}/>
    </div>
  )
}

export default StockInfoBar
