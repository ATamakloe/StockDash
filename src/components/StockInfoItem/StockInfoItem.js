import React from 'react';
import './StockInfoItem.css';
import Loading from '../Loading/Loading'
const StockInfoItem = ({labels, data}) => {
  let info = null;
  if (data === '') {
    info = <Loading/>;
  } else {
    info = <>
    <p className="info">
      <span>{labels[0]}</span>
      <span>{data[0]}</span>
    </p>
    <p className="info">
      <span>{labels[1]}</span>
      <span>{data[1]}</span>
    </p>

    <p className="info">
      <span>{labels[2]}</span>
      <span>{data[2]}</span>
    </p>
    </>
  }
  return (
    <div className="infobox">
      {info}
  </div>)
}

export default StockInfoItem
