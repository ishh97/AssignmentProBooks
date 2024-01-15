import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get(`https://reactnd-books-api.udacity.com/books`,{ headers: { 'Authorization': 'whatever-you-want' }})
    .then(res=>{
      setData(res.data.books)
    })
    .catch(err=>{
      console.log("Error fetching content")
    })
  },[])

  return (
    
    <div>
      <h1>BOOKS</h1>
      {data.map((book)=>{
        return(
          <div key={book.id}>
            <h2>{book.title}</h2>
            <div>
              <div>
              <img src={book.imageLinks.thumbnail} alt=""></img>
              </div>
              <p>{book.description}</p>
  
            </div>
            {book.authors.map((author,index)=>{
              return <h4 key={index}>{author}</h4>
            })}
            <hr></hr>
          </div>
        )
      })}

    </div>
  );
}

export default App;