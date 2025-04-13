import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
function App() {
  return ( 
    <div className ="">
      <Router>
        <Routes>
          <Route path="/" element={<ProductList/>} />
          <Route path="/about" />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
