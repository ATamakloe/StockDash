import React, { memo } from 'react';
import './MainPanel.css';
import StockInfoBar from '../StockInfoBar/StockInfoBar';
import NewsPanel from '../NewsPanel/NewsPanel';
import StockGraph from '../StockGraph/StockGraph';
import Loading from '../Loading/Loading';

const MainPanel = ({news, financials, timeSeries, isLoaded}) => {
  const mainpanelbody = !isLoaded ? <Loading/> :
  <>
  <StockInfoBar  financials={financials}/>
  <StockGraph timeSeries={timeSeries}/>
  <NewsPanel news={news}/>
  </>

return (
    <div className="mainpanel">
      {mainpanelbody}
    </div>

  )
}

export default memo(MainPanel)
