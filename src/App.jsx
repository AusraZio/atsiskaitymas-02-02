import React, { useState } from "react";
import SignIn from "./components/SignIn";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === "test@test.com" && password === "password123") {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn handleLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;