import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import SavedStockList from '../SavedStockList/SavedStockList'

const Header = ({handleChange, onSubmit, loadSavedStock, savedstocks, deleteSavedStock, term}) => {
  return (
  <header>
    <Logo/>
    <p className="logotext">Stock.Dash</p>
    <Search handleChange={handleChange} onSubmit={onSubmit} term={term}/>
  <SavedStockList deleteSavedStock={deleteSavedStock} loadSavedStock={loadSavedStock} savedstocks={savedstocks}/>
  </header>
)
}
export default Header
