import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="spirits" element={<ProductPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactForm />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
