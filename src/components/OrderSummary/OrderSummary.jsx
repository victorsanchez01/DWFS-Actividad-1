import React from 'react';
import { useCart } from '../../context/CartContext'; // Importamos desde el contexto
import './OrderSummary.css';

function OrderSummary() {
    const { items, getTotalPrice } = useCart();
    const subtotal = getTotalPrice();
    const shipping = subtotal > 0 ? 3.99 : 0;
    const total = subtotal + shipping;

    return (
        <div className="order-summary">
            <h2 className="order-summary__title">Resumen del Pedido</h2>

            <div className="order-summary__items">
                {items.map(item => (
                    <div key={item.id} className="order-summary__item">
            <span className="order-summary__item-name">
              {item.title}
            </span>
                        <span className="order-summary__item-price">
              $ {item.price.toFixed(2)}
            </span>
                    </div>
                ))}
            </div>

            <div className="order-summary__total-row">
                <span>Subtotal</span>
                <span>$ {subtotal.toFixed(2)}</span>
            </div>

            <div className="order-summary__total-row">
                <span>Envío</span>
                <span>$ {shipping.toFixed(2)}</span>
            </div>

            <div className="order-summary__total">
                <span>Total</span>
                <span>$ {total.toFixed(2)}</span>
            </div>
        </div>
    );
}

export default OrderSummary;