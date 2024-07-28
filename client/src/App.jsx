import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import ShopCategory from "./Pages/Shop/ShopCategory";
import ProductCheckOut from "./Pages/Shop/ProductCheckOut";
import ProductDetails from "./Pages/Shop/ProductDetails";
import TrackOrder from "./Pages/TrackOrder/TrackOrder";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login&SignUp/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopCategory />} />
        <Route path="/productcheckout" element={<ProductCheckOut />} />
        <Route path="/shopcategory" element={<ShopCategory />} />
        <Route path="/productdetail" element={<ProductDetails />} />
        <Route path="/order-tracking" element={<TrackOrder />} />
        <Route path="/contact-page" element={<Contact />} />
        <Route path="/login-page" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
