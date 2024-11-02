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

  const location = useLocation();
  const navigate = useNavigate();


  const isOnUpdatePage = location.pathname === "/UpdateMarkdown";
  const buttonLabel = isOnUpdatePage ? "Page 1" : "Page 2";
  const targetPath = isOnUpdatePage ? "/" : "/UpdateMarkdown";


  return (
    <div>
      <header>
        <h1>Markdown Editor</h1>
        <Button
          action={()=>navigate(targetPath)}
          label={buttonLabel}
          color="none"
          />
          <Outlet/>
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
