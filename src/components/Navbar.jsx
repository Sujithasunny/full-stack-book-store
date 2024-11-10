import React from 'react';
const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1>Bookstore</h1>
      <div className="cart">
        <span>Cart ({cartCount})</span>
      </div>
    </nav>
  );
};
export default Navbar;
