import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import {use} from 'react'
import CartContext from '../../Context1/CartContext'

import './index.css'

const CartItem = props => {
  const {cartItemDetails} = props
  const {title, brand, quantity, price, imageUrl, id} = cartItemDetails
  const value = use(CartContext)
  const {deleteCartItem, incrementCartItemQuantity, decrementCartItemQuantity} =
    value
  const rem = () => deleteCartItem(id)
  /* const inc = id => {
    setCartList(prev =>
      prev.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    )
  }
  const dec = id => {
    setCartList(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, quantity: Math.max(1, item.quantity - 1)}
          : item,
      ),
    )
  }*/

  return (
    <li className="cart-item">
      <img className="cart-product-image" src={imageUrl} alt={title} />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{title}</p>
          <p className="cart-product-brand">by {brand}</p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            onClick={() => decrementCartItemQuantity(id)}
            className="quantity-controller-button"
          >
            <BsDashSquare color="#52606D" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            onClick={() => incrementCartItemQuantity(id)}
          >
            <BsPlusSquare color="#52606D" size={12} />
          </button>
        </div>
        <div className="total-price-delete-container">
          <p className="cart-total-price">Rs {price * quantity}/-</p>
          <button className="remove-button" type="button">
            Remove
          </button>
        </div>
      </div>
      <button className="delete-button" type="button" onClick={rem}>
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  )
}

export default CartItem
