import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home'; // Home component
// import SignUp from './components/SignUp';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import BooksWorld from './components/BooksWorld'; // Corrected name

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <Router>
      <div className="App">
        <Header cartCount={cart.length} />

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/booksworld" element={<BooksWorld addToCart={addToCart} />} /> {/* Corrected route */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
