import React from "react"

const Logo = (props) => {

    return (
        <header>
            <h1>Welcome to the {props.appName}</h1>
            <img onClick={LogoWhenClicked} src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt=""></img>
        </header>
    )
}

const LogoWhenClicked = () => {
    console.log("The logo is clicked")
}

export default Logo