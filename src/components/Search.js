import React, { useState } from "react";


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
        id="searchfield"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input id="search" onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;