import React, { useState } from 'react';
import './HomePage.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <div className="home-page">
            <div className="home-page__container">
                <h1 className="home-page__title">Nuestro Catálogo de Libros</h1>
                <div className="home-page__search-container">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <div className="home-page__content">
                    <BookList searchTerm={searchTerm} />
                </div>
            </div>
        </div>
    );
}

export default HomePage