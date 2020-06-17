// export const fetchLists = async ()=> {
//     const data = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`);
//     const list = await data.json();
//     return list.results.books;
// }
//change parameters to receive id to list and id to book, maybe do it as an object
export const fetchSingleBook = async (identifier) => {
  const list = await fetchCustomList(identifier.params.id);
  var book = list.filter(function (currBook) {
    return currBook.title === identifier.params.id2;
  });
  return book;
};

export const fetchLists = async () => {
  const data = await fetch(
    `https://api.nytimes.com/svc/books/v3//lists/names.json?api-key=${process.env.REACT_APP_API_KEY}`
  );
  const lists = await data.json();
  return lists;
};

export const fetchCustomList = async (complement) => {
  const data = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/current/${complement}.json?api-key=${process.env.REACT_APP_API_KEY}`
  );
  const list = await data.json();
  return list.results.books;
};
//function to retrieve the review(if there is any) based on the isbns
// const review = async (book) => {
//   const data = await fetch(
//     `https://api.nytimes.com/svc/books/v3/reviews.json?isbn=${book.primary_isbn10}&api-key=${process.env.REACT_APP_API_KEY}`
//   );
//   const re = await data.json();
//   console.log("REVIEWS", re);
// };

export function successCallback(result) {
  console.log("It succeeded with " + result);
}

export function failureCallback(error) {
  console.log("It failed with " + error);
}
