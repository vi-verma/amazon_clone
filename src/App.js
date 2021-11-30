import React, { useState } from "react";
import { Layout } from "antd";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd.css";
import "./App.css";

import Navigation from "./components/header/Navigation";
import SubNavigation from "./components/header/SubNavigation";
import MainCarousel from "./components/mainCarousel/MainCarousel";
import MIC1 from "./components/itemsCarousel/MIC1";
import DetailedItemCard from "./UI/DetailedItemCard";
import Login from "./components/loginSignup/Login";
import Signup from "./components/loginSignup/Signup";
import BannerCard from "./BannerCard";
import About from "./components/footer/About";
import Cart from "./components/cart/Cart";
// import FilteredItemsCard from "./components/filterItems/FilteredItemsCard";
import CartProvider from "./store/cart-provider";
import FilteredItemsCard from "./components/filterItems/FilteredItemsCard";


function App() {
  const [detailItemView, _detailItemView] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  console.log(filteredItems, 'app');
  
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Navigation onFliterItems={setFilteredItems}/>
          <SubNavigation />
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/home" />}
            />
            <Route
              path="/home"
              element={
                <>
                  <MainCarousel />
                  <MIC1 detailItemView={_detailItemView} />
                  <BannerCard />
                  <MIC1 />
                  <BannerCard />
                </>
              }
            />
            <Route
              path="/item/:itemId"
              element={<DetailedItemCard detailItemView={detailItemView} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/new-user-signup" element={<Signup />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/filter' element={<FilteredItemsCard filteredItems={filteredItems}/>} />
          </Routes>
          <About />
        </Layout>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
