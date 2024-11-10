import React, { useState } from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false); 
  const totalPrice = cart.reduce((total, book) => total + book.price, 0);
  const handleBuyNow = () => {
    setOrderPlaced(true);
  };
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        cart.map((book) => (
          <div className="cart-item" key={book.id}>
            <img src={book.image} alt={book.title} />
            <div className="cart-item-details">
              <h3 style={{ color: 'black' }}>{book.title}</h3>
              <p style={{ color: 'black' }}>Author: {book.author}</p>
              <p style={{ color: 'black' }}>Price: Rs.{book.price}</p>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="total-price">
          <h3>Total Price: Rs.{totalPrice}</h3>
        </div>
      )}
      {cart.length > 0 && !orderPlaced && (
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      )}
      {orderPlaced && (
        <div className="order-confirmation">
          <p>Order has been placed!</p>
        </div>
      )}
    </div>
  );
};
export default Cart;
