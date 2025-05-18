import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [items, setItems] = useLocalStorage('cart', []);

    const addToCart = (book) => {
        const existingItem = items.find(item => item.id === book.id);

        if (existingItem) {
            alert('Este libro ya está en tu carrito');
            return;
        }

        setItems([...items, book]);
    };

    const removeFromCart = (bookId) => {
        setItems(items.filter(item => item.id !== bookId));
    };

    const clearCart = () => {
        setItems([]);
    };

    const getTotalPrice = () => {
        return items.reduce((total, item) => total + item.price, 0);
    };

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

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de un CartProvider');
    }
    return context;
}