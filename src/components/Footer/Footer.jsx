import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__section">
                    <h3 className="footer__title">Librería Online</h3>
                    <p className="footer__description">
                        Tu tienda de libros en línea con las mejores selecciones de literatura,
                        ficción, no ficción y más.
                    </p>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Enlaces</h3>
                    <ul className="footer__links">
                        <li><a href="#" className="footer__link">Sobre nosotros</a></li>
                        <li><a href="#" className="footer__link">Términos y condiciones</a></li>
                        <li><a href="#" className="footer__link">Política de privacidad</a></li>
                        <li><a href="#" className="footer__link">Contacto</a></li>
                    </ul>
                </div>

                <div className="footer__section">
                    <h3 className="footer__title">Contacto</h3>
                    <address className="footer__address">
                        <p>Calle Librería, 123</p>
                        <p>28001 Madrid, España</p>
                        <p>Email: info@libreria-online.com</p>
                        <p>Teléfono: +34 91 123 45 67</p>
                    </address>
                </div>
            </div>

            <div className="footer__bottom">
                <p className="footer__copyright">
                    © {new Date().getFullYear()} Relatos De Papel. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer;