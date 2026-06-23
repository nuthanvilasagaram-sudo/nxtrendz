import CartItem from '../CartItem'
import {use} from 'react'
import CartContext from '../../Context1/CartContext'
import './index.css'

/*const cartList = [
  {
    title: 'Product 1',
    brand: 'Brand Name',
    id: 1001,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price: 760,
    quantity: 5,
  },
  {
    title: 'Product 2',
    brand: 'Brand Name',
    id: 1002,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
    price: 760,
    quantity: 2,
  },
]*/

const CartListView = () => {
  const value = use(CartContext)
  const {cartList, deleteCart} = value
  const remal = () => {
    deleteCart()
  }
  const totalCost = cartList.reduce(
    (acc, eachItem) => acc + eachItem.price * eachItem.quantity,
    0,
  )
  return (
    <div>
      <button className="b12" type="button" onClick={remal}>
        Remove all
      </button>
      <ul className="cart-list">
        {cartList.map(eachCartItem => (
          <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
        ))}
      </ul>
      <h1>
        Total cost: <span>{totalCost}/-</span>
      </h1>
      <button className="b1" type="button">
        Checkout
      </button>
    </div>
  )
}

export default CartListView