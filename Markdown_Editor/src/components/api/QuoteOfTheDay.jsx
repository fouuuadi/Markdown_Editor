import { useState, useEffect } from "react"
import Button from "../button/Button"

//code fait par FOUAD LAMNAOUAR
//je me suis inspirer du cour de React (exercice iss)

function QuoteOfTheDay() {

    const [quote, setQuote] = useState({
        id: null, advice: null,
    });
    // ici on va utilise un useEffect pour changer toute les 6seconde la citation
    useEffect(() => { 
        const objectInterval = setInterval(fetchApiQuoteOfTheday, 5000);
        fetchApiQuoteOfTheday();
        
        return () => {clearInterval(objectInterval)}
    }, []);

    function fetchApiQuoteOfTheday(){
        fetch('https://api.adviceslip.com/advice')
            .then((res) => (res.json()))
            .then((data) => (setQuote(data.slip)))
            .catch((err) => console.error(err));
    }
    // fetchApiQuoteOfTheday()
    // console.log(quote)
    // possibilité d'appuyer sur un bouton pour en obtenir une autre citation
    function updateQuoteOfTheDay(){
        fetchApiQuoteOfTheday();
    }


    //render
  return (
    <div className="quote_of_the_day">
      <h1>Citation du jour en Anglais</h1>
      <p>{quote.id}: {quote.advice}</p>
      <Button
      className="btn_quote" 
      label="Une autre citation du jour ?"
      action={updateQuoteOfTheDay}
      color="none"
      />
    </div>
  )
}

export default QuoteOfTheDay
