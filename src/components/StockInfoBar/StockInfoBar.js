import React from 'react'
import './StockInfoBar.css';
import StockInfoItem from '../StockInfoItem/StockInfoItem';

const StockInfoBar = ({financials}) => {
  let labelarr = ["Open","Close","Volume","MKT Cap","P/E","YTD","1YRH","1YRL","Change"];
  let dataarr;

  financials = financials.open ?
  dataarr = [financials["open"],financials["close"],financials["volume"],financials["mktcap"],financials["peRatio"],financials["YTD"],financials["1YRH"],financials["1YRL"],financials["change"]]
  : dataarr = Array(9).fill("N/A")
  return (
    <div className="infobar">
      <StockInfoItem labels={labelarr.slice(0,3)} data={dataarr.slice(0,3)}/>
      <StockInfoItem labels={labelarr.slice(3,6)} data={dataarr.slice(3,6)}/>
      <StockInfoItem labels={labelarr.slice(6,9)} data={dataarr.slice(6,9)}/>
    </div>
  )
}

export default StockInfoBar
