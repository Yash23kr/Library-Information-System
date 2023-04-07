import React, { useEffect } from 'react';
import styled from 'styled-components';
import Leftland from '../components/Leftland';
import Rightland from '../components/Rightland';
import axios from 'axios';
import { useState } from 'react';

const LandingDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgb(245, 206, 66);
    display: flex;
    
`;


const LandingPage = () => {
//     const [books, setBooks] = useState([]);

//   useEffect(() => {
//     async function fetchBooks() {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setBooks(response.data);
//     }
//     fetchBooks();
//   }, []);

    return ( 
        <LandingDiv>
            <Leftland/>
            <Rightland/>
            {/* <table>
  <tr>
    <th>ID</th>
    <th>Title</th>
    <th>Body</th>
  </tr>
  {books.map(book => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
          </li>
        ))}
</table> */}
        </LandingDiv>
     );
}
 
export default LandingPage;