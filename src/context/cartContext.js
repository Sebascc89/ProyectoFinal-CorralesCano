import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}]);
        } else {
            console.error('El producto ya fue agregado');
        };
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId);
        setCart(cartUpdate);
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const total = () => {
        console.log(cart.reduce((acc, item) => acc + item.quantity * Number(item.price), 0));
        return cart.reduce((acc, item) => acc + item.quantity * Number(item.price), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}