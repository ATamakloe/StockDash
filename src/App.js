import React, { Component } from 'react';
import Header from './components/Header/Header'
import StockHeaderBar from './components/StockHeaderBar/StockHeaderBar'
import MainPanel from './components/MainPanel/MainPanel'
import './App.css';
import tickerlist from'../src/data/stockdata.json';

const unibitKEY = "lSt08c96ezRk7n5aW-mYUllwJ-JTKysc";

class App extends Component {
    state = {
    isLoaded:false,
    timeSeries:null,
    financials:null,
    stockinfo:null,
    news:[],
    savedstocks:[],
    term:'',
    oldTerm:'NFLX'
  }


  getData = async (ticker="NFLX") => {

    const timeSeriesURL = `https://api.iextrading.com/1.0/stock/${ticker}/chart/1d`;
    const stockinfoURL = `https://api.iextrading.com/1.0/stock/${ticker}/quote`;
    const financialURL = `https://api.unibit.ai/financials/summary/${ticker}?datatype=json&AccessKey=${unibitKEY}`;
    const newsURL = `https://newsapi.org/v2/everything?q=${ticker}&apiKey=ce59fbe555dd4b509f0f6d595d8ee7b3`;

    const timeSeries = await fetch(timeSeriesURL).then(data => data.json()).then(data => data.map(data => ({x:data.label, y:data.close})));
    const stockinfo = await fetch(stockinfoURL).then(data => data.json()).then(data => ({symbol:data.symbol, name:data.companyName, price:data.latestPrice}));
    const financials = await fetch(financialURL).then(data => data.json()).then(data => data["Company financials summary"]);
    const news = await fetch(newsURL).then(data =>data.json()).then(data => data.articles.map(article => ( {source: article.source.name, title:article.title, url:article.url})))


    return {timeSeries:timeSeries, stockinfo:stockinfo, financials:financials, news:news}
  }


  async componentDidMount() {
    const defaultStocks = ["FB","AMZN","GOOGL","KO"];
     await this.getData().then(results => this.setState({timeSeries:results.timeSeries, financials:results.financials, stockinfo:results.stockinfo, news:results.news, isLoaded:true}))


     //This method only needs to be called once
     const savedStockURL = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${defaultStocks.join(',')}&types=quote`;
     const savedstocks = await fetch(savedStockURL)
     .then(data => data.json())
     .then(data => Object.keys(data)
     .map(stock => ( {symbol:data[stock].quote.symbol, price:data[stock].quote.latestPrice } )));

     this.setState(prevState => ({
       savedstocks: [...prevState.savedstocks, ...savedstocks]
     }))

  }

onSubmit = (e, term) => {
    e.preventDefault();
    if(this.state.oldTerm !== this.state.term && tickerlist[term.toUpperCase()] !== undefined ) {
      /*If the search term isn't the stock that's currently loaded & it's a valid ticker
        set all the states to null/loading, get data*/
    this.setState({isLoaded:false, timeSeries:null, financials:null, stockinfo:null, news:[]},
      () => this.getData(term)
      .then(results => this.setState({timeSeries:results.timeSeries, financials:results.financials, stockinfo:results.stockinfo, news:results.news, oldTerm:results.stockinfo.symbol, isLoaded:true})))
    }
  };

handleChange = (e) => {
        this.setState({term:e.target.value});
      }

addSavedStock = async (ticker) => {
   if ( this.state.savedstocks.map(stock => stock.symbol).includes(ticker) === false && this.state.savedstocks.length < 5 ) {
          //If the stock isn't already saved and there aren't already 5 saved stocks
     let newSavedStock = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${ticker}&types=quote`)
     .then(data => data.json())
     .then(data => Object.keys(data).map(stock => ( {symbol:data[stock].quote.symbol, price:data[stock].quote.latestPrice } )));


     this.setState(prevState => ({
       savedstocks: [...prevState.savedstocks, ...newSavedStock]
     }))
   }
  }

loadSavedStock = async (ticker) => {
  this.setState({term:ticker}, () => {
    if(this.state.oldTerm !== this.state.term) {
      this.setState({isLoaded:false, timeSeries:null, financials:null, stockinfo:null, news:[]},
        () => this.getData(ticker)
        .then(results => this.setState({timeSeries:results.timeSeries, financials:results.financials, stockinfo:results.stockinfo, news:results.news, oldTerm: results.stockinfo.symbol, isLoaded:true})))
      }
  })
};

deleteSavedStock = (ticker) => {
    this.setState(prevState =>
      ({
        savedstocks: prevState.savedstocks.filter(stock => stock.symbol !== ticker)
      })
    )};


  render() {
    return (
      <div className="App">
        <Header onSubmit={this.onSubmit} term={this.state.term} handleChange={this.handleChange} loadSavedStock={this.loadSavedStock} deleteSavedStock ={this.deleteSavedStock} savedstocks={this.state.savedstocks}/>
        <StockHeaderBar addSavedStock={this.addSavedStock} info={this.state.stockinfo}/>
        <MainPanel isLoaded={this.state.isLoaded} news={this.state.news} timeSeries ={this.state.timeSeries} financials={this.state.financials}/>
      </div>
    );
  }
}

export default App;
