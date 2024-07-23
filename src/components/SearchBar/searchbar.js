import React from "react";
import "./searchbar.scss";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) =>
{
    return(
        <div className="searchBar-wrap">
            <form onSubmit={formSubmit}>
                <input 
                    type="text"
                    onChange={handleSearchKey}
                    placeholder="Search Activity"
                    value={value}
                />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Find</button>
            </form>
        </div>
    );
};

export default SearchBar;