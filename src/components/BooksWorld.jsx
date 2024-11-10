import React, { useEffect, useState } from 'react';
import './BooksWorld.css';
import axios from 'axios';

const BooksWorld = ({ addToCart }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3010/api/products')  // Correct API endpoint
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book-card" key={book._id}>
          <img src={book.image} alt={book.title} />
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <p>Rs.{book.price.toFixed(2)}</p>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default BooksWorld;
