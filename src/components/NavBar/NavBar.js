import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/cartContext';
import CartWidget from "../CartWidget/CartWidget";

import './NavBar.css'

function NavBar() {

  const { cart } = useContext(CartContext);

  const links = [
    {
      linkId: 'transparente',
      linkName: 'Línea transparente'
    }, {
      linkId: 'blanca',
      linkName: 'Línea blanca'
    }, {
      linkId: 'papel',
      linkName: 'Línea papel'
    }
  ]
  return (

    <div className='Navbar'>
      <div className='Logo'>
        <Link to={'/'}>UMAN</Link>
      </div>
      <ul className='NavigationList'>
        {links.map(({ linkId, linkName }) =>
          <li key={linkId}>
            <Link to={`category/${linkId}`}>{linkName}</Link>
          </li>
        )}
      </ul>

      {cart.reduce((acc, item) => acc + item.quantity, 0) !== 0 &&
        <CartWidget />
      }
    </div>


  );
}

export default NavBar;