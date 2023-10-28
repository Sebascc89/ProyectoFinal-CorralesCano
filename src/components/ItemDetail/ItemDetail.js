import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { CartContext } from '../../context/cartContext'

import ItemCount from '../ItemCount/ItemCount'

// import Item from '../Item/Item'
import './ItemDetail.css'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img, description
        }

        addItem(item, quantity)
    }

    return (
        <div className='CardDetail'>
            <div className='CardHeader'>
                <span>
                    {name}
                </span>
            </div>
            <img src={img} alt={name} className='CardImg' />
            <div className='Info'>
                <span>
                    Categoria: {category}
                </span>
                <span>
                    Descripción: {description}
                </span>
                <span>
                    Precio: ${price}
                </span>
            </div>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )
            }
        </div>
    )
}

export default ItemDetail