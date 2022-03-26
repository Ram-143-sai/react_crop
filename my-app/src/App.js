import Products from "./components/products"
import AddProduct from "./components/AddProduct/index.js";
import ProductEdit from "./components/ProductEdit";
import Home from "./components/Home";
import Cart from "./components/Cart";
import MyOrder from "./components/MyOrder";
import SignUp from "./components/SignUp";
// import Login from "./components/Login";
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';


const App = () => {
  return (<>
  <Router>
  <Routes>
  <Route exact path="/signup" element={<SignUp />} />

    <Route exact path="/" element={<Home />} />
    <Route exact path="/Cart" element={<Cart />} />
    <Route exact path="/MyOrder" element={<MyOrder />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/addProduct" element={<AddProduct />} />
    <Route exact path="/productEdit" element={<ProductEdit />} />
  </Routes>
  </Router> 
  </>)
}

export default App;