import React from 'react';
import './BookList.css';
const BookList = ({ books, onAddToCart }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book.id}>
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>{book.description}</p>
          <button onClick={() => onAddToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
export default BookList;
