import { useContext } from "react"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/cartContext"

import CartItem from "../CartItem/CartItem"

import './Cart.css'

const Cart = () => {
    const { cart, clearCart, cartQuantity, total } = useContext(CartContext);


    if (cartQuantity() === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Productos</Link>
            </div>
        )
    };

    return (
        <div className="CartDetail">
            <div className="CartDetail__Container">
                <div className="CartDetail__List">
                    <div className="CartItem CartItem__Header">
                        <span>Producto</span>
                        <span>Descripción</span>
                        <span>Precio</span>
                        <span>Unidades</span>
                        <span>Subtotal</span>
                        <span>Acción</span>
                    </div>
                    {cart.map(p =>
                        <CartItem key={p.id} item={p} />
                    )}
                </div>
                <div className="CartDetail__Checkout">
                    <h3>Total: $ {total()}</h3>
                    <div className="CartDetail__CheckoutActions">
                        <button onClick={() => clearCart()} className="ClearButton">Limpiar carrito</button>
                        <Link to='/checkout' className="CheckoutButton">Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;    