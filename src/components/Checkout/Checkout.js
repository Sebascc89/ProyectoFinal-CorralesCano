import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'

import './Checkout.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
import { CartContext } from '../../context/cartContext';

const Checkout = () => {
  const [newOrder, setNewOrder] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
  });

const {cart, total, clearCart} = useContext(CartContext)
const [orderId, setOrderId] = useState('') 

  const [confirmedEmail, setConfirmedEmail] = useState('')

  const onChangeInput = ({ target: { value, name } }) => {
    if (name !== 'confirmedEmail') {
      setNewOrder({ ...newOrder, [name]: value });
    } else if (name === 'confirmedEmail') {
      setConfirmedEmail(value)
    }
  };

  const onValidateOrder = () => {
    if (!newOrder.name || !newOrder.lastName || !newOrder.phone || !newOrder.email) {
      return false;
    };
    return true;
  };

  const onSubmitOrder = (e) => {
    e.preventDefault()
    if (!onValidateOrder()) {
      Swal.fire(
        'Revisa!',
        'Debes diligenciar todos los campos',
        'warning'
      )
      return;
    }

    else if (confirmedEmail !== newOrder.email) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Los correos electrónicos ingresados no coinciden',
      })
      return;
    }

    else{
      let order = {
        newOrder,
        item: cart,
        total: total(),
        date: serverTimestamp()
      }
      const sales = collection(db, "orders")
      addDoc(sales,order)
      .then((res) => {
        setOrderId(res.id)
        clearCart()
      })
      .catch((error) => console.log(error))
    }
  };

  return (
    <div>
      {orderId !== ''
      ?<div>
        <h2>Compra realizada exitosamente.</h2>
        <h5>Su id de orden es: {orderId}</h5>
        <h6>Ayudamos a salvar el planeta. Un 'vaso' a la vez.</h6>
      </div>
      :<div className='Checkout'>
      <form onSubmit={onSubmitOrder} className='Checkout__Container'>
        <label className='Checkout__Label'>
          Nombres
          <input name={'name'} value={newOrder.name} type='text' onChange={onChangeInput} />
        </label>
        <label className='Checkout__Label'>
          Apellidos
          <input name={'lastName'} value={newOrder.lastName} type='text' onChange={onChangeInput} />
        </label>
        <label className='Checkout__Label'>
          Teléfono
          <input name={'phone'} value={newOrder.phone} type='number' onChange={onChangeInput} />
        </label>
        <label className='Checkout__Label'>
          E-mail
          <input name={'email'} value={newOrder.email} type='email' onChange={onChangeInput} />
        </label>
        <label className='Checkout__Label'>
          Confirmación de E-mail
          <input name={'confirmedEmail'} value={confirmedEmail} onChange={onChangeInput}/>
        </label>
        <button className='Checkout__Button' type='submit' onClick={onSubmitOrder}>Realizar compra</button>
      </form>
      </div>}
    </div>

  )
}

export default Checkout