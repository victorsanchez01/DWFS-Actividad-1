import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import './Header.css';

function Header() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { items } = useCart();

    const cartItemCount = items.length;

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const closeCart = () => {
        setIsCartOpen(false);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/home" className="header__logo">
                    Relatos De Papel
                </Link>

                <nav className="header__nav">
                    <Link to="/home" className="header__nav-link">Inicio</Link>
                    <button
                        className="header__cart-button"
                        onClick={toggleCart}
                        aria-label="Abrir carrito"
                    >
                        <svg
                            className="header__cart-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        {cartItemCount > 0 && (
                            <span className="header__cart-count">{cartItemCount}</span>
                        )}
                    </button>
                </nav>
                <Cart isOpen={isCartOpen} onClose={closeCart} />
            </div>
        </header>
    );
}

export default Header;