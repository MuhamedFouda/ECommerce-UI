import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import Product from './Pages/Product/Product';
import ProductList from './Pages/ProductList/ProductList';


export default function App() {

  return (
    // <div>
    //   <Home/>
    // </div>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="*" element={"No Page There is a Error"} />
      </Routes>
    </BrowserRouter>
  )
}

 
