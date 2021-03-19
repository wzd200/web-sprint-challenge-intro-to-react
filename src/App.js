import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'
// import constants from './constants'
const StyledTitle = styled.div`
  color: 'crimson';
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starWarsCharacters, setStarWarsCharacters] = useState([])
  // const [currentCharacterId, setCurrentCharacterId] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
      Axios
      .get('https://swapi.dev/api/people/?format=json')
      .then(res => {
        // console.log(`this is working`, res)
        setStarWarsCharacters(res.data)
      })
      .catch(err => {
        console.log(`${err}`)
        console.log('U GOT AN ERR')
    })
    

  }, [])
  



  return (
    <div className="App">
      <StyledTitle>
        <h1 className="Header">Characters</h1>
      </StyledTitle>
      {starWarsCharacters.map((ch) => {
        return <Character key={Math.random()} starWarsCharacters={starWarsCharacters} name={ch.name} height={ch.height}/>
      })}

    </div>
  );
}

export default App;
