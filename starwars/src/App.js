import React, {useState, useEffect} from 'react';
import {PersonCard} from "./components/PersonCard";
import axios from "axios";
import './App.css';
import styled from 'styled-components';

const Header1 = styled.h1`
  color: red;  
`;



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);
    

  console.log(data)

  useEffect (() => {
    axios
     .get("https://swapi.co/api/people")
     .then(res => setData(res.data.results))
     .catch(err => console.log(err));
  } ,[]);

  return (
    <div className="App">
      <Header1 className="Header">STAR WARS CHARACTERS</Header1>
      {data.map((person, index) => {
        return <PersonCard key={index} person={person}/>
        }
      )};
    </div>
  );
}

export default App;
