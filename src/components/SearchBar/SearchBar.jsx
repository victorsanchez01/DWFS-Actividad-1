import React, { useState } from 'react'
import SearchBarIcon from '../../icons/SearchBarIcon';
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <form className="search-bar">
            <input
                type="text"
                className="search-bar__input"
                placeholder="Buscar por título de libro..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="search-bar__icon">
                <SearchBarIcon />
            </div>
        </form>
    );
}

export default SearchBar