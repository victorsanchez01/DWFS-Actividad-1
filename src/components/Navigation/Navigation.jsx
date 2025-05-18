import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <nav className="navigation">
            <Link to="/home" className="navigation__link">Inicio</Link>
            <Link to="/checkout" className="navigation__link">Carrito</Link>
        </nav>
    )
}

export default Navigation