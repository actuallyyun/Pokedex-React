import React, { useState } from "react"

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([])

    const catchPokemon = () => {
        setCaught(caught.concat(pokemons[randomIndex]))
    }

    const pokemons = ['a', 'b', 'c']
    const randomIndex = Math.floor(Math.random() * (pokemons.length))

    return (<div className="container">
        <p>Caught {caught.length} Pokémon on {props.date}</p>
        <ul className="ul">
            {caught.map((pokemon, index) => {
                return <li className="list-items" key={index}>{pokemon}</li>
            })}
        </ul>

        <button className="btn btn-primary" onClick={catchPokemon}>Catch Pokemon</button>

    </div>)
}

export default CaughtPokemon 