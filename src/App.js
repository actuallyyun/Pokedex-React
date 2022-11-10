import Logo from "./Logo"
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
const date = new Date().toLocaleDateString()


const App = () => {
  return (
    <div>
      <Logo appName="Pokédex" />
      <h2>
        <BestPokemon abilities={abilities} />
      </h2>
      <CaughtPokemon date={date} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  )
}





export default App;
