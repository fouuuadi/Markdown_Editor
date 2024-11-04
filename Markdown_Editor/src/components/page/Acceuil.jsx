import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'
import HistoricalEvents from '../api/HistoricalEvents'
import JokeOfTheDay from '../api/Joke'
import MocktailOfTheDay from '../api/Mocktail'
import RecipeOfTheDay from '../api/Recipe'
import ListeMarkDown from '../markdown/ListeMarkDown'
import Button from '../button/Button'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'; 


//render
function Acceuil() {

  const navigate = useNavigate();



  return (
    <div>
      <header>
        <h1>Markdown Editor</h1>
        <div className='btn_page1'>
        <Button
          className="btn_page1"
          action={()=>navigate("/UpdateMarkdown")}
          label="Page 2"
          color="none"
          />          
        </div>
      </header>     
        <h2>API</h2>
      <div className='section1'>  
        <ShowTime/>
        <QuoteOfTheDay/>
        <HistoricalEvents/>
        <JokeOfTheDay/>
        <MocktailOfTheDay/>
        <RecipeOfTheDay/>        
      </div>
      <div className='section2'>
        <ListeMarkDown/>
      </div>
    </div>

  )
}

export default Acceuil
