import Layout from './layout'
import {BrowserRouter as Router } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react'

import './App.css'


export const ShopContext = createContext(null)

function App() {
  const [cartItems, setCartItems] = useState([])


  const [productList, setProductList] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const deleteFromCart = productId => {
    const newCart = cartItems.filter(item => item.id !== productId)
    setCartItems(newCart)
  }
  
  const addToCart = productId => {
    const product = productList.find((item) => item.id == productId)
    product.qty = 1
    const newCart = [product, ...cartItems]
    setCartItems(newCart)
  }

  const qtyIncreament = productId => {
    // const index = cartItems.indexOf(item => item.id == productId)
    const items = cartItems
    const product = items.find((item) => item.id == productId)
    if (product.qty == 0) return
    product.qty += 1 
    // setCartItems([...cartItems, cartItems[index] = product])
    setCartItems([...items])
  }
  const qtyDecreament = productId => {
    // const index = cartItems.indexOf(item => item.id == productId)
    const items = cartItems
    const product = items.find((item) => item.id == productId)
    if (product.qty == 1) return
    product.qty -= 1 
    // setCartItems([...cartItems, cartItems[index] = product])
    setCartItems([...items])
  }

  useEffect(() => {
      fetch("https://fakestoreapi.com/products", {mode: "cors"})
      .then(response => {
          if (response.status >= 400) {
              throw new Error("Server error")
          } else {
              return response.json()
          }
      })
      .then(response => {
          // console.log(response)
          setProductList(response)
      })
      .catch(error => setError(error))
      .finally(() => setLoading(false))
  },[])


  return (
    <Router>
      <ShopContext.Provider value={{
        cartItems, 
        addToCart, 
        deleteFromCart, 
        productList, 
        error, 
        loading,
        qtyIncreament,
        qtyDecreament
        }}>
        <Layout />
      </ShopContext.Provider>
    </Router> 
  )
}

export default App
