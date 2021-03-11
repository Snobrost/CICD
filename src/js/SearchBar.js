import React from 'react'

const SearchBar = ({searchValue, handleInputText, found, total}) => (
  <form >
    <input className="form-control" type="search" placeholder="Search" aria-label="Search"  value={searchValue} onChange={handleInputText} />
    <br/>
    {found ?
      <span className="navbar-text mr-4">Found {found} out of {total}</span>
      :
      <span className="navbar-text mr-4">No appartment found</span>
    }<br/><br/><br/>
  </form>
)

export default SearchBar