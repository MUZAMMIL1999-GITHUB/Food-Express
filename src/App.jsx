import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './Component/Home'
import { About } from './Component/About'
import { Details } from './Component/Details'
import { Cart } from './Component/Cart'
import { Contact } from './Component/Contact'
import { Register } from './Component/Register'
import { Login } from './Component/Login'
import { useEffect, useState } from 'react'



function App() {

  const [cartItems, setCartItems] = useState([])   
 
 
  const handleAddToCart = (product) => {
    // Check if product already exists
    const productExists = cartItems.some((item) => item.id === product.id);

    if (productExists) {
      alert("Product Already Exists in Cart");
    } else {
      setCartItems([...cartItems, product]);
      alert("Product Added Successfully");
    }
  };



  
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home handleAddToCart = {handleAddToCart} cartItems = {cartItems}/>}/>
      <Route path='/about' element={<About cartItems = {cartItems}/>}/>
      <Route path='/details/:id' element={<Details cartItems = {cartItems}/>}/>
      <Route path='/cart' element={<Cart cartItems = {cartItems} setCartItems = {setCartItems}/>}/>
      <Route path='/contact' element={<Contact cartItems = {cartItems}/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
