import './App.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import ProductDetail from './store/productDetail';
import OurProducts from './pages/ourProducts';
import About from './pages/about';
import Contact from './pages/contact';
import Register from './pages/register';
import Login from './pages/login';
import Cart from 'pages/cartItems';
import Favorites from './pages/favorites';
import CheckOut from 'pages/checkOut';

function App() {
  
  return (
  <>
  <div className='flex flex-col gap-y-20'>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
      <Route path='/Products' element={<OurProducts/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact'element={<Contact/>}/>
      <Route path='/Login'element={<Login/>}/>
      <Route path='Register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
    <Footer/>
  </div>
  </>
  
   
  )
}

export default App