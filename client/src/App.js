import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './Pages/SignUp';
import { useState } from 'react';
import CartList from './Pages/CartList/CartList';
import Sucess from './Components/Sucess';
import Cancel from './Components/Cancel';


function App() {
  const [cart, setCart] = useState([])
  
   const addToCart = (data) => {
       setCart([...cart, {...data, quantity:1}])
   }
   const updateCart = (newCart) => {
    setCart(newCart);
  };
  return (
    <div className='app'>
      <BrowserRouter>
       <NavBar count={cart.length}/>      
      <Routes>
        <Route path='/' element={<Home addToCart={addToCart}/> }/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='products/' element={<Products addToCart={addToCart}/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cartlist' element={<CartList cart={cart}  updateCart={updateCart}/>}/>
        <Route path='/sucess' element={<Sucess/>}/>
        <Route path='/cancel' element={<Cancel/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
