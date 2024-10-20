//Evenement historiques qui ont eu lieu a la date du jour

import { useEffect, useState } from "react"
import Button from "../button/Button";

function HistoricalEvents() {
    const [event, setEvent] = useState([]);
    //On initialise avec un tableau vide car on attend les données de l'API

    function fetchApiHistoricalEvents() {
        fetch("https://history.muffinlabs.com/date")
          .then((res) => res.json())
          .then((result) => {
            setEvent(result.data.Events.slice(0,2)); //ici on utilise slice pour recuperer 4 évènement 
                                                    //pour pas inondé la page ^^
            
            //console.log(result.data.Events);
          })
          .catch((err) => console.error(err));
      }
    //fetchApiHistoricalEvents(event)

    function updateHistoricalEvents(){
        fetchApiHistoricalEvents()
    }

    useEffect(() => {
        fetchApiHistoricalEvents();
    }, [])

  return (
    <div className="event">
        <h1>Les évènements historiques qui ont eu lieu à la date du jour</h1>
        {event.map((event, index) =>(
            <div key={index}>
                <h3>{event.year}</h3>
                <p>{event.text}</p>
            </div>
        ))}
        {/* <Button 
        label="D'autres évèvenements ?"
        action={updateHistoricalEvents}/> */}
    </div>
  )
}

export default HistoricalEvents
