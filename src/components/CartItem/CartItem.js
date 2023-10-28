import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({ item }) => {
    const { removeItem } = useContext(CartContext)

    console.log(item);

    return (
        <div className="CartItem">
            <img src={item.img} alt={item.name} />
            <div className="CartItem__Description">
                <span>{item.name}</span>
                <span>{item.description}</span>
            </div>
            <span>$ {item.price}</span>
            <span>{item.quantity}</span>
            <span>$ {item.quantity * item.price}</span>
            <button className="DeleteButton" onClick={() => removeItem(item.id)}>
                <i className="fas fa-trash-alt" />
            </button>
        </div>
    )
}

export default CartItem