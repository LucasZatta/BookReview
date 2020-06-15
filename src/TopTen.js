import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {fetchLists, fetchCustomList} from './GetData';
import { Container, Col, Row} from 'react-bootstrap';

function TopTen({match}) {
    
    const [items, setItems] = useState([]);
    
    const linkStyle = {
        color:'black'
    };

    useEffect(() => {
        var resultado = fetchCustomList(match.params.id)
        resultado.then(data =>{
            //console.log("signal",data);
            setItems(data);
        })

    }, []);
  return (
    
    <Container>
        <Row className="justify-content-md-center">
            {items.map(item=>(
        
            <Col key={item.rank} >
                <Link to = {`book/${match.params.id}/${item.title}`}>
                    <img src={item.book_image} alt={item.book_image} />
                </Link>
                
            </Col>
        
        ))}
        
        </Row>
        
    </Container>
  );
}

export default TopTen;
