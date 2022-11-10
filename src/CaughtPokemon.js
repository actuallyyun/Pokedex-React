import React, { useState } from "react"

const CaughtPokemon = (props) => {
    const [caught, setCaught] = useState([])
    const [pokemonNameInput, setPokemonNameInput] = useState("")

    const catchPokemon = () => {

        if (pokemonNameInput.length > 0) {
            setCaught(caught.concat(pokemonNameInput))
            setPokemonNameInput("")
        }
    }


    const handleInputChange = (event) => {
        setPokemonNameInput(event.target.value)

    }

    return (<div className="container">
        <p>Caught {caught.length} Pokémon on {props.date}</p>
        <ul className="ul">
            {caught.map((pokemon, index) => {
                return <li className="list-items" key={index}>{pokemon}</li>
            })}
        </ul>
        <input type="text" value={pokemonNameInput} onChange={handleInputChange} />

        <button className="btn btn-primary" onClick={catchPokemon}>Catch Pokemon</button>

    </div>)
}

export default CaughtPokemon 