import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getBookById } from '../../services/mockData';
import { useCart } from '../../context/CartContext';
import Loader from "../Loader/Loader.jsx";
import './BookDetailView.css';

function BookDetailView({ bookId }) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const foundBook = getBookById(bookId);

            if (foundBook) {
                setBook(foundBook);
            } else {
                navigate('/home');
            }

            setLoading(false);
        }, 2000);
    }, [bookId, navigate]);

    if (loading) {
        return <div className="book-detail__loading">
            <Loader />
        </div>;
    }

    if (!book) {
        return null;
    }

    return (
        <div className="book-detail">
            <div className="book-detail__image-container">
                <img
                    src={book.coverImage}
                    alt={`Portada de ${book.title}`}
                    className="book-detail__image"
                />
            </div>

            <div className="book-detail__content">
                <h1 className="book-detail__title">{book.title}</h1>
                <h2 className="book-detail__author">por {book.author}</h2>
                <p className="book-detail__price">$ {book.price.toFixed(2)}</p>

                <p className="book-detail__description">{book.description}</p>

                <ul className="book-detail__info-list">
                    <li className="book-detail__info-item">
                        <span className="book-detail__info-label">Año:</span>
                        <span>{book.year}</span>
                    </li>
                    <li className="book-detail__info-item">
                        <span className="book-detail__info-label">Género:</span>
                        <span>{book.genre}</span>
                    </li>
                    <li className="book-detail__info-item">
                        <span className="book-detail__info-label">Páginas:</span>
                        <span>{book.pages}</span>
                    </li>
                </ul>

                <button
                    className="book-detail__add-to-cart"
                    onClick={() => addToCart(book)}
                >
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
}

export default BookDetailView;