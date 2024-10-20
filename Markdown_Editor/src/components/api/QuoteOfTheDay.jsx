import { useState, useEffect } from "react"
import Button from "../button/Button"

function QuoteOfTheDay() {

    const [quote, setQuote] = useState({
        id: null, advice: null,
    });

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

    function updateQuoteOftheDay(){
        fetchApiQuoteOfTheday();
    }


    //render
  return (
    <div className="quote_of_the_day">
      <h1>Citation du jour en Anglais</h1>
      <h2>{quote.id}: {quote.advice}</h2>
      <Button 
      label="Une autre citation du jour ?"
      action={updateQuoteOftheDay}
      color="none"
      />
    </div>
  )
}

export default QuoteOfTheDay
