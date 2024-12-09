
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Footer from "./components/Footer/Footter"
import LoginSignup from './pages/LoginSignup';
import logo from "./components/Assets/w-logo-blue.png"


function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory  category="men" />} />
          <Route path='/womens' element={<ShopCategory  category="women" />} />
          <Route path='/kids' element={<ShopCategory  category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
