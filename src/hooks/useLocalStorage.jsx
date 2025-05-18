import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    // Obtener el valor inicial del localStorage o usar el initialValue
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // Devolver el valor parseado o el valor inicial
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    // Actualizar localStorage cuando cambie el estado
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error(error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
}