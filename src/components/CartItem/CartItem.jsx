import React from 'react';
import './CartItem.css';

function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
            <div className="cart-item__image-container">
                <img
                    src={item.coverImage}
                    alt={`Portada de ${item.title}`}
                    className="cart-item__image"
                />
            </div>
            <div className="cart-item__content">
                <h4 className="cart-item__title">{item.title}</h4>
                <p className="cart-item__author">{item.author}</p>
                <p className="cart-item__price">$ {item.price.toFixed(2)} </p>
                <button
                    className="cart-item__remove"
                    onClick={() => removeFromCart(item.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
}

export default CartItem