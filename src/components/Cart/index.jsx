import Header from '../Header'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

import CartContext from '../../Context1/CartContext'

import './index.css'
import {use} from 'react'

const Cart = () => {
  const value = use(CartContext)
  const {cartList} = value
  const showEmptyView = cartList.length === 0

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? (
          <EmptyCartView />
        ) : (
          <div className="cart-content-container">
            <h1 className="cart-heading">My Cart</h1>
            <CartListView />
          </div>
        )}
      </div>
    </>
  )
}

export default Cart