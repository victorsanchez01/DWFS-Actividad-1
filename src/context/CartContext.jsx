import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Creamos el contexto
const CartContext = createContext();

// Proveedor del contexto
export function CartProvider({ children }) {
    const [items, setItems] = useLocalStorage('cart', []);

    // Añadir libro al carrito
    const addToCart = (book) => {
        // Verificamos si el libro ya está en el carrito
        const existingItem = items.find(item => item.id === book.id);

        if (existingItem) {
            // Si ya está, no hacemos nada (o podríamos incrementar cantidad)
            alert('Este libro ya está en tu carrito');
            return;
        }

        // Si no está, lo añadimos
        setItems([...items, book]);
    };

    // Eliminar libro del carrito
    const removeFromCart = (bookId) => {
        setItems(items.filter(item => item.id !== bookId));
    };

    // Vaciar carrito
    const clearCart = () => {
        setItems([]);
    };

    // Calcular precio total
    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

    // Exponemos las funciones y el estado a través del contexto
    const value = {
        items,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Hook personalizado para usar el carrito en cualquier componente
export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de un CartProvider');
    }
    return context;
}