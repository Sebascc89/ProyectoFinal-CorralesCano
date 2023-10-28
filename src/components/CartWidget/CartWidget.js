import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/cartContext'

import './CartWidget.css'

const CartWidget = () => {
    const [totalQuantity, setTotalQuantity] = useState(null)
    const { cart } = useContext(CartContext);

    useEffect(() => {
        setTotalQuantity(cart.reduce((acc, item) => acc + item.quantity, 0))
    }, [cart])

    return (
        <Link to='/cart' className='CartWidget'>
            <i className="fa-solid fa-cart-shopping" />
            <span>
                {totalQuantity}
            </span>
        </Link>
    )
}

export default CartWidget