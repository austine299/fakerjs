import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
import Shop from './components/Shop';
import Navbar from './components/navBar/Navbar';
function App() {

  return ( 
    <div className ="" >
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/about" />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element ={<Shop/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
