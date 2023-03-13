import React from 'react'
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import Navbar from './features/Navbar/Navbar';
import Home from './pages/Home/Home'
import { useDispatch ,useSelector} from "react-redux";
import { fetchProducts } from "./features/Products/productsSlice";
import { useEffect } from 'react';
import Footer from './features/Footer/Footer';

const App = () => {
    const dispatch = useDispatch();
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

  return (
    <div className='app'>
        <Navbar/>
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App