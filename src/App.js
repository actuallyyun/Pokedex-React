
const App = () => {
  return (
    <div>
      <Logo />
      <h2>
        <BestPokemon />
      </h2></div>
  )
}

const Logo = () => {
  return (
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt=""></img>
    </header>
  )

}

const BestPokemon = () => {
  return <p>My favorite Pokemon is Pikachu.</p>
}

export default App;
