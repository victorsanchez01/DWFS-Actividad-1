import React from 'react'
import { Link } from 'react-router-dom'
import './BookCard.css'

function BookCard({ book, addToCart }) {
    return (
        <div className="book-card">
            <Link to={`/book/${book.id}`} className="book-card__link">
                <div className="book-card__image-container">
                    <img
                        src={book.coverImage}
                        alt={`Portada de ${book.title}`}
                        className="book-card__image"
                    />
                </div>
                <div className="book-card__content">
                    <h3 className="book-card__title">{book.title}</h3>
                    <p className="book-card__author">{book.author}</p>
                    <p className="book-card__price">$ {book.price.toFixed(2)}</p>
                </div>
            </Link>
            <button
                className="book-card__button"
                onClick={(e) => {
                    e.preventDefault()
                    addToCart(book)
                }}
            >
                Añadir al carrito
            </button>
        </div>
    )
}

export default BookCard