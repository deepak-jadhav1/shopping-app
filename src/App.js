import logo from './logo.svg';
import './App.css';
import Navigation from './customer/component/Navigation/Navigation';
import HomePage from './customer/Pages/HomePage/HomePage';
import Footer from './customer/component/Footer/Footer';
import Product from './customer/component/Product/Product';
import ProductDetails from './customer/component/ProductDetails/ProductDetails';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import { Route, Routes } from 'react-router-dom';
import CustomerRoute from './Routers/CustomerRoute';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/*' element={<CustomerRoute/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
