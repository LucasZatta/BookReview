import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { fetchSingleBook } from "./GetData";

function BookDetail({ match }) {
  const [book, setBook] = useState({});

  useEffect(() => {
    const response = fetchSingleBook(match);
    response.then((data) => {
      setBook(data[0]);
    });
  }, [match]);

  return (
    <div className="BookDetail">
      <h1>{book.title}</h1>
      <img src={book.book_image} alt={book.book_image} />
      <h2>{book.description}</h2>
    </div>
  );
}

export default BookDetail;
