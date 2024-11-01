import { useState, useEffect } from 'react';

function JokeOfTheDay() {
    const [joke, setJoke] = useState({
        id: null,
        setup: '',
        punchline: ''
    });

    useEffect(() => {
        function fetchJoke() {
            fetch("https://official-joke-api.appspot.com/random_joke")
                .then((res) => res.json())
                .then((data) => setJoke(data)) 
                .catch((err) => console.error(err));
        }

        function avMinuit() {
            const now = new Date();
            const minuit = new Date();
            minuit.setHours(24, 0, 0, 0); 
            return minuit.getTime() - now.getTime();
        }

        function newFetch() {
            fetchJoke();
            const delaiMinuit = avMinuit();

            setTimeout(() => {
                fetchJoke(); 
                setInterval(fetchJoke, 86400000); 
            }, delaiMinuit);
        }

        newFetch(); 

    }, []); 

    return (
        <div className='joke'>
            <h1>Joke of the Day</h1>
            <p>{joke.setup}</p> {/* Affiche la première partie de la blague */}
            <p>{joke.punchline}</p> {/* Affiche la deuxième partie de la blague */}
        </div>
    );
}

export default JokeOfTheDay;
