import React from "react"


const BestPokemon = (props) => {

    return (
        <div className="container">
            <p>My favorite Pokemon is Pikachu.</p>
            <ul>
                {props.abilities.map((ability, index) =>
                    <li key={index}>{ability}</li>
                )}

            </ul>
        </div>)
}


export default BestPokemon