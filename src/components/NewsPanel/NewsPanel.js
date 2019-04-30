import React from 'react';
import './NewsPanel.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import Loading from '../Loading/Loading';
const NewsPanel = ({news}) => {
  const articlelist = news.length === 0  ?  <Loading/> : news.map((news,i) => <NewsArticle key={i} source={news.source} title={news.title} url={news.url}/>);
  return (

  <section className="newspanel">
    <h2>News</h2>
    {articlelist};
  </section>
  )
}

export default NewsPanel;
