import React from 'react';


export const fetchLists = async ()=> {
    const data = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const list = await data.json();
    return list.results.books;          
}
//change parameters to receive id to list and id to book, maybe do it as an object
export const fetchBook = async (identifier) => {
    const list = await fetchCustomList(identifier.params.id);
    var book = list.filter(function(currBook){
        //console.log("title: ", currBook.title, "id: ", identifier)
        return currBook.title == identifier.params.id2;
    })
    return book;
}

export const fetchALLTIMELists = async ()=> {
    const data = await fetch(`https://api.nytimes.com/svc/books/v3//lists/names.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const lists = await data.json();
    return lists;  
}

export const fetchCustomList = async (complement) => {
    const data = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${complement}.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const list = await data.json();
    return list.results.books;
}


export function successCallback(result) {
console.log("It succeeded with " + result);
}

export function failureCallback(error) {
console.log("It failed with " + error);
}