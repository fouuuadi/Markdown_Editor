import ShowTime from '../api/ShowTime'
import QuoteOfTheDay from '../api/QuoteOfTheDay'
import HistoricalEvents from '../api/HistoricalEvents'



//render
function Acceuil() {
  return (
    <div>
      <h1>Markdown Editor</h1>
      <h2>API</h2>
      <div className='api'>
        <ShowTime />
        <QuoteOfTheDay />
        <HistoricalEvents />

      </div>
    </div>

  )
}

export default Acceuil
