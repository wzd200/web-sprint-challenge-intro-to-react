// test Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Styledh3 = styled.h3`
  color: orange;
  text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
`

export default function Character(starWarsCharacter) {
    // console.log('character is working')
    // console.log(starWarsCharacter.name)
    return (
        <div>
            <Styledh3>{`Name: ${starWarsCharacter.name} Height: ${starWarsCharacter.height}`}</Styledh3>
        </div>
      )}
