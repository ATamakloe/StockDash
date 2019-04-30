import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({source, title, url}) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="newsitem">
    <article>
      <div className="articletext">
        <h3>{source}</h3>
        <h5>{title}</h5>
      </div>
    </article>
  </a>
  )
}

export default NewsArticle
