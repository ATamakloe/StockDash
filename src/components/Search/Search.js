import React from 'react';
import './Search.css';

const Search = ({onSubmit, handleChange, term}) => {
  return (
  <section role="search" className="search" >
<form onSubmit={(e) => onSubmit(e, term)}>
<fieldset>
  <label htmlFor="search">
        <input type="search" name="search" id="search" placeholder="Search..." maxLength="7" tabIndex="1" value={term} onChange={handleChange}/>
    </label>
</fieldset>
<button className="searchbutton">
  <div id="magnifying-glass"></div>
  </button>
</form>
</section>
  )
}

export default Search;
