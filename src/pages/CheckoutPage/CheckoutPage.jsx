import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CheckoutPage.css'
// import Checkout from '../../components/Checkout/Checkout'

function CheckoutPage() {
    const navigate = useNavigate();

    const handleCheckoutComplete = () => {
        alert('¡Pedido realizado con éxito!')
        navigate('/home')
    };

    return (
        <div className="checkout-page">
            <h1 className="checkout-page__title">Finalizar Compra</h1>
            {/*<Checkout onComplete={handleCheckoutComplete} />*/}
        </div>
    )
}

export default CheckoutPage