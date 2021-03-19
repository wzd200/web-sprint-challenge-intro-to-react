// test Write your Character component here
import React from 'react'


export default function Character(starWarsCharacter) {
    // console.log('character is working')
    // console.log(starWarsCharacter.name)
    return (
        <div>
            <h3>{`Name: ${starWarsCharacter.name}, Height: ${starWarsCharacter.height}`}</h3>
        </div>
      )}
