import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useCart } from '../../context/CartContext'; // Importamos desde el contexto
import './Checkout.css';

function Checkout({ onComplete }) {
    const { items, clearCart } = useCart();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        cardExpiry: '',
        cardCVC: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            alert('¡Pedido realizado con éxito!');
            clearCart();
            onComplete();
        }, 1000);
    };

    const isFormValid = () => {
        const requiredFields = ['name', 'email', 'address', 'city', 'postalCode', 'cardNumber', 'cardExpiry', 'cardCVC'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };

    if (items.length === 0) {
        return (
            <div className="checkout__empty-cart">
                <p>No tienes productos en el carrito</p>
                <button onClick={() => window.history.back()} className="checkout__back-button">
                    Volver a la tienda
                </button>
            </div>
        );
    }

    return (
        <div className="checkout">
            <div className="checkout__form">
                <h2>Datos de Pago</h2>
                <form onSubmit={handleSubmit}>
                    <button
                        type="submit"
                        className="checkout__button"
                        disabled={!isFormValid()}
                    >
                        Realizar Pedido
                    </button>
                </form>
            </div>

            <OrderSummary />
        </div>
    );
}

export default Checkout;