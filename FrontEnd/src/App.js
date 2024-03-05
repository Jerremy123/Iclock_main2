import "./App.css";
import Navbar from "./Component/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignUp";
import Footer from "./Component/Footer/Footer";
import men_banner from "./Component/Asset/banner_mens.png";
import women_banner from "./Component/Asset/banner_women.png";
import kid_banner from "./Component/Asset/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="Phái mạnh" />}
          ></Route>
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="Phái đẹp" />}
          ></Route>
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="Trẻ em" />}
          ></Route>
          {/* <Route path="/product" element={<Product />}></Route>
          <Route path=":productId" element={<Product />}></Route> */}
          <Route path="/product/:productId" element={<Product />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignUp />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
