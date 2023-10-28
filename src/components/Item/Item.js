import { Link } from 'react-router-dom'

import './Item.css'

const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className='CardItem'>
            <div className='ItemHeader'>
                <span>
                    {name}
                </span>
            </div>
            <img src={img} alt={name} className='ItemImg' />
            <div className='Info'>
                <span>
                    Precio: ${price}
                </span>
                <span>
                    Stock disponible: {stock}
                </span>
            </div>
            <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
        </div>
    )
}

export default Item