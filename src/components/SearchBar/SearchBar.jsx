import React, { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        // Opcional: búsqueda en tiempo real
        // onSearch(e.target.value);
    };

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input
                type="text"
                className="search-bar__input"
                placeholder="Buscar por título de libro..."
                value={searchTerm}
                onChange={handleChange}
            />
            <button type="submit" className="search-bar__button">
                <SearchBarIcon />
            </button>
        </form>
    );
}

export default SearchBar