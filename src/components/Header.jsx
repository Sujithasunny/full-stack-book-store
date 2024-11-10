import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK9iEHfIW9i4djTrHkJdpHs2YDVZtIYDJ8A&s" alt="Logo" className="logo-image" />
        </Link>
      </div>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/booksworld" className="nav-link">BooksWorld</Link>
        {/* <Link to="/signup" className="nav-link">SignUp</Link> */}
        <div className="cart-link">
          <Link to="/cart" className="nav-link">Cart</Link>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
