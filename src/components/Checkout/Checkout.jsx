import React, { useState } from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { useCart } from '../../context/CartContext';
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

        // Simulamos el proceso de pago
        setTimeout(() => {
            alert('¡Pedido realizado con éxito!');
            clearCart();
            onComplete();
        }, 1000);
    };

    const handleCardNumberChange = (e) => {
        // Eliminar espacios y caracteres no numéricos
        let value = e.target.value.replace(/\D/g, '');

        // Limitar a 16 dígitos
        value = value.substring(0, 16);

        // Agregar espacios cada 4 dígitos
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

        setFormData(prev => ({
            ...prev,
            cardNumber: value
        }));
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.substring(0, 4);

        if (value.length >= 2) {
            const month = parseInt(value.substring(0, 2));
            if (month > 12) {
                value = '12' + value.substring(2);
            }
            if (month < 1) {
                value = '01' + value.substring(2);
            }
            value = value.slice(0, 2) + '/' + value.slice(2);
        }

        setFormData(prev => ({
            ...prev,
            cardExpiry: value
        }));
    };

    const isFormValid = () => {
        const requiredFields = ['name', 'email', 'address', 'city', 'postalCode', 'cardNumber', 'cardExpiry', 'cardCVC'];
        return requiredFields.every(field => formData[field].trim() !== '');
    };

    if (items.length === 0) {
        return (
            <div className="checkout__empty-cart">
                <p className="noItems__label">No tienes productos en el carrito</p>
                <button
                    onClick={() => window.history.back()}
                    className="checkout__back-button">
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
                    <div className="checkout__form-group">
                        <label htmlFor="name" className="checkout__label">Nombre completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__form-group">
                        <label htmlFor="email" className="checkout__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__form-group">
                        <label htmlFor="address" className="checkout__label">Dirección</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="checkout__input"
                            required
                        />
                    </div>

                    <div className="checkout__form-row">
                        <div className="checkout__form-group">
                            <label htmlFor="city" className="checkout__label">Ciudad</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="checkout__input"
                                required
                            />
                        </div>

                        <div className="checkout__form-group">
                            <label htmlFor="postalCode" className="checkout__label">Código Postal</label>
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                className="checkout__input"
                                required
                            />
                        </div>
                    </div>

                    <h3 className="checkout__section-title">Información de Pago</h3>

                    <div className="checkout__form-group">
                        <label htmlFor="cardNumber" className="checkout__label">Número de tarjeta</label>
                        <input
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleCardNumberChange}
                            className="checkout__input"
                            placeholder="0000 0000 0000 0000"
                            required
                        />
                    </div>

                    <div className="checkout__form-row">
                        <div className="checkout__form-group">
                            <label htmlFor="cardExpiry" className="checkout__label">Vencimiento</label>
                            <input
                                type="text"
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleExpiryChange}
                                className="checkout__input"
                                placeholder="MM/AA"
                                required
                            />
                        </div>

                        <div className="checkout__form-group">
                            <label htmlFor="cardCVC" className="checkout__label">CVC</label>
                            <input
                                type="text"
                                id="cardCVC"
                                name="cardCVC"
                                value={formData.cardCVC}
                                onChange={handleChange}
                                className="checkout__input"
                                placeholder="000"
                                required
                            />
                        </div>
                    </div>

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