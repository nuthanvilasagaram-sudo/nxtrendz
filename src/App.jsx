import {BrowserRouter, Route, Routes} from 'react-router'
import {useState} from 'react'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import ProductItemDetails from './components/ProductItemDetails1'
import NotFound from './components/NotFound'
import CartContext from './Context1/CartContext'

import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    setCartList(prevCartList => {
      const existingItem = prevCartList.find(
        eachItem => eachItem.id === product.id,
      )

      if (existingItem) {
        return prevCartList.map(eachItem =>
          eachItem.id === product.id
            ? {
                ...eachItem,
                quantity: eachItem.quantity + product.quantity,
              }
            : eachItem,
        )
      }

      return [...prevCartList, product]
    })
  }
  const deleteCartItem = id => {
    setCartList(prevCartList =>
      prevCartList.filter(eachItem => eachItem.id !== id),
    )
  }
  const deleteCart = () => {
    setCartList([])
  }

  const incrementCartItemQuantity = id => {
    setCartList(prevCartList =>
      prevCartList.map(eachItem =>
        eachItem.id === id
          ? {...eachItem, quantity: eachItem.quantity + 1}
          : eachItem,
      ),
    )
  }

  const decrementCartItemQuantity = id => {
    setCartList(prevCartList =>
      prevCartList.map(eachItem =>
        eachItem.id === id
          ? {
              ...eachItem,
              quantity: Math.max(1, eachItem.quantity - 1),
            }
          : eachItem,
      ),
    )
  }
  return (
    <BrowserRouter>
      <CartContext
        value={{
          cartList,
          addCartItem,
          deleteCartItem,
          deleteCart,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        }}
      >
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <Products />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProtectedRoute>
                <ProductItemDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CartContext>
    </BrowserRouter>
  )
}

export default App