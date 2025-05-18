import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cart from '../Cart/Cart';
import CartIcon from '../../icons/CartIcon';
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
                       <CartIcon />
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