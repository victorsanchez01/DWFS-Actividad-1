import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import { useCart } from '../../context/CartContext';
import './Cart.css';

function Cart({ isOpen, onClose }) {
    const { items, removeFromCart, getTotalPrice } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        onClose(); // Cierra el carrito
        navigate('/checkout');
    };

    // Si el carrito no está abierto, no renderizamos su contenido (opcional, para mejorar rendimiento)
    if (!isOpen) {
        return null;
    }

    return (
        <>
            {/* Overlay para cerrar el carrito al hacer clic fuera */}
            <div className="cart-overlay" onClick={onClose}></div>

            <div className={`cart ${isOpen ? 'cart--open' : ''}`}>
                <div className="cart__header">
                    <h2 className="cart__title">Tu Carrito</h2>
                    <button className="cart__close-button" onClick={onClose}>×</button>
                </div>

                <div className="cart__items">
                    {items.length === 0 ? (
                        <div className="cart__empty">Tu carrito está vacío</div>
                    ) : (
                        items.map(item => (
                            <CartItem
                                key={item.id}
                                item={item}
                                removeFromCart={removeFromCart}
                            />
                        ))
                    )}
                </div>

                <div className="cart__footer">
                    <div className="cart__total">
                        <span>Total:</span>
                        <span>{getTotalPrice().toFixed(2)} €</span>
                    </div>
                    <button
                        className="cart__checkout"
                        disabled={items.length === 0}
                        onClick={handleCheckout}
                    >
                        Proceder al pago
                    </button>
                </div>
            </div>
        </>
    );
}

export default Cart;