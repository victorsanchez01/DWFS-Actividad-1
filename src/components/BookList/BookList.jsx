import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { getBooks } from '../../services/mockData';
import { useCart } from '../../context/CartContext';
import './BookList.css';

function BookList({ searchTerm }) {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        // Simulamos la carga de datos
        setLoading(true);
        setTimeout(() => {
            const data = getBooks();
            setBooks(data);
            setLoading(false);
        }, 800);
    }, []);

    // Filtramos libros por título si hay un término de búsqueda
    const filteredBooks = searchTerm
        ? books.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : books;

    if (loading) {
        return <div className="book-list__loading">Cargando libros...</div>;
    }

    if (filteredBooks.length === 0) {
        return (
            <div className="book-list__empty">
                No se encontraron libros{searchTerm ? ` para "${searchTerm}"` : ''}.
            </div>
        );
    }

    return (
        <div className="book-list">
            {filteredBooks.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
}

export default BookList;