import React from 'react';
import './App.css';
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import NotFound from "./NotFound";
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
    <div>
     Welcome
     <div>
       <Link to='Home'>Go to Home</Link> {''}
       <Link to='About'>Go to About</Link> {''}
       <Link to='Product'>Go to Products</Link>
     </div>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='about' element={<About/>}></Route>
       <Route path='product' element={<Product/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
