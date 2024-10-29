import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'
import HistoricalEvents from '../api/HistoricalEvents'
import JokeOfTheDay from '../api/Joke'
import RecipeOfTheDay from '../api/Recipe'
import MocktailOfTheDay from '../api/Mocktail'


//render
function Acceuil() {
  return (
    <div>      
        <h1>Markdown Editor</h1>
        <h2>API</h2>
      <div className='api'>  
        <ShowTime/>
        <QuoteOfTheDay/>
        <HistoricalEvents/>
        <JokeOfTheDay />
        <MocktailOfTheDay />
        <RecipeOfTheDay />
      </div>
    </div>

  )
}

export default Acceuil
