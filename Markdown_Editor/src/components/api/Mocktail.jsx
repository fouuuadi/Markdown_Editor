import { useState, useEffect } from 'react';

function MocktailOfTheDay() {
    const [mocktail, setMocktail] = useState({
        id: null,
        strDrink: "",
        strDrinkThumb: "",
        idDrink: null
    });



    useEffect(() => {

        function fetchMocktail() {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
                .then((res) => res.json())
                .then((data) => {
                    const i = Math.floor(Math.random() * data.drinks.length);
                    setMocktail(data.drinks[i]);
                })
                .catch((err) => console.error(err));
        }


        // Avoir la diff entre l'heure actuelle et minuit - src => chatgpt
        function avMinuit() {
            const now = new Date();
            const minuit = new Date();
            minuit.setHours(24, 0, 0, 0); 
            return minuit.getTime() - now.getTime();
        }


        
        function newFetch() {
            fetchMocktail();
            const delaiMinuit = avMinuit();

            setTimeout(() => {
                fetchMocktail();
                setInterval(fetchMocktail, 86400000);
            }, delaiMinuit);
        }

        newFetch();
    }, []);

    return (
        <div className='mocktail'>
            <h1>Mocktail Of The Day</h1>
            <h2>{mocktail.strDrink}</h2>
            <img className="img_mocktail" src={mocktail.strDrinkThumb} alt={mocktail.strDrinkThumb} />
        </div>
    )
}

export default MocktailOfTheDay;