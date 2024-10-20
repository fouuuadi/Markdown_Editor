import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'
import HistoricalEvents from '../api/HistoricalEvents'


//render
function Acceuil() {
  return (
    <div className='api'>
      <h1>Markdown Editor</h1>
      <h2>API</h2>
      <ShowTime/>
      <QuoteOfTheDay/>
      <HistoricalEvents/>
    </div>
  )
}

export default Acceuil
