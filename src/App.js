import Logo from "./Logo"
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

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
    </div>
  )
}





export default App;
