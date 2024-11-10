
import React from 'react';
import './BookCart.css';
const BookCart = ({ book, addToCart }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookCart;
