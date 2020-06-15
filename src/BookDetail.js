import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {fetchBook} from './GetData';

function BookDetail({match}) {
    const [item, setItem] = useState({});

    const linkStyle = {
        color:'black'
    };
    useEffect(() => {
        const response = fetchBook(match);
        response.then(data=>{
            setItem(data[0]);
        })
        
    }, []);


    
//add buying links with icons
//organize everything
  return (
    <div className="BookDetail">
        <h1>{item.title}</h1>
        <img src={item.book_image} alt={item.book_image}/>
        <h2>{item.description}</h2>
    </div>
  );
}

export default BookDetail;
