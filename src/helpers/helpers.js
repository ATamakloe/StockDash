require('isomorphic-fetch');

async function getData(ticker = "NFLX") {
  const unibitKEY = "lSt08c96ezRk7n5aW-mYUllwJ-JTKysc";
  const timeSeriesUrl = `https://api.iextrading.com/1.0/stock/${ticker}/chart/1d`;
  const financeurl = `https://api.iextrading.com/1.0/stock/${ticker}/quote`;
  const financialsummurl = `https://api.unibit.ai/financials/summary/${ticker}?datatype=json&AccessKey=${unibitKEY}`;
  const newsUrl = `https://newsapi.org/v2/everything?q=${ticker}&apiKey=ce59fbe555dd4b509f0f6d595d8ee7b3`;

  const stockinfo = await fetch(financeurl).then(data => data.json()).then(data => ({symbol:data.symbol, name:data.companyName, price:data.latestPrice}));
  const timeSeries = await fetch(timeSeriesUrl).then(data => data.json()).then(data => data.map(data => ({x:data.label, y:data.close})));
  const financials = await fetch(financialsummurl).then(data => data.json()).then(data => data["Company financials summary"]);
  const news = await fetch(newsUrl).then(data =>data.json()).then(data => data.articles.map(article => ( {source: article.source.name, title:article.title})));

  return {stockinfo:stockinfo, timeSeries:timeSeries, financials:financials, news:news};
};
