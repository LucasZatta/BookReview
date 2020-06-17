import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { fetchLists } from "./GetData";
//import { Container, Col, Row } from 'react-bootstrap';

function WelcomeHome() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    var resultado = fetchLists();
    resultado.then((data) => {
      setItems(data.results);
    });
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Link key={item.list_name_encoded} to={`top/${item.list_name_encoded}`}>
          <h2>{item.list_name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default WelcomeHome;
