import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'
import HistoricalEvents from '../api/HistoricalEvents'
import JokeOfTheDay from '../api/Joke'
import MocktailOfTheDay from '../api/Mocktail'
import RecipeOfTheDay from '../api/Recipe'
import ListeMarkDown from '../api/ListeMarkDown'


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
        <JokeOfTheDay/>
        <MocktailOfTheDay/>
        <RecipeOfTheDay/>
        <ListeMarkDown/>
      </div>
    </div>

  )
}

export default Acceuil
