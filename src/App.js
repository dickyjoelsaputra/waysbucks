import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import Landing from './pages/Landing';
import ProductDetail from './pages/ProductDetail';
import Profile from './pages/Profile';
import AddProduct from './admin/AddProduct';
import AddToping from './admin/AddToping';
import Transaction from './admin/Transaction';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-toping" element={<AddToping />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
