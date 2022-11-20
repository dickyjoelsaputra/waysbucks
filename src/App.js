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
import MyCart from './pages/MyCart';
import Test from './Test'
// import Register from './components/auth/RegisterForm'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detail-product/:name/:price/" element={<ProductDetail />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-toping" element={<AddToping />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/test" element={<Test />} />
          {/* <Route path="/asdf" element={<Register />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
