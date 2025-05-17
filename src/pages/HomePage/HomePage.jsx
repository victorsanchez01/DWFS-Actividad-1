import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/home');
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <div className="landing-page">
            <div className="landing-page__container">
                <h1 className="landing-page__title">Bienvenido a nuestra Librería Online</h1>
                <p className="landing-page__subtitle">
                    Descubre miles de libros para todos los gustos
                </p>
                <button
                    className="landing-page__button"
                    onClick={() => navigate('/home')}
                >
                    Explorar ahora
                </button>
                <p className="landing-page__redirect-message">
                    Serás redirigido automáticamente en 5 segundos...
                </p>
            </div>
        </div>
    );
}

export default LandingPage;