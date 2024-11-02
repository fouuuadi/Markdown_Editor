import { useState, useEffect } from 'react';

function RecipeOfTheDay() {
    const [recipe, setRecipe] = useState({
        idMeal: null,
        strMeal: "",
        strDrinkAlternate: "", 
        strCategory: "",
        strArea: "",
        strInstructions: "",
        strMealThumb: "",
        strTags: "",
        strYoutube: "",
        strIngredient1: "",
        strIngredient2: "",
        strIngredient3: "",
        strIngredient4: "",
        strIngredient5: "",
        strIngredient6: "",
        strIngredient7: "",
        strIngredient8: "",
        strIngredient9: "",
        strIngredient10: "", 
        strIngredient11: "", 
        strIngredient12: "", 
        strIngredient13: "", 
        strIngredient14: "", 
        strIngredient15: "", 
        strIngredient16: "", 
        strIngredient17: "", 
        strIngredient18: "", 
        strIngredient19: "", 
        strIngredient20: "",
        strMeasure1: "",
        strMeasure2: "",
        strMeasure3: "",
        strMeasure4: "",
        strMeasure5: "",
        strMeasure6: "",
        strMeasure7: "",
        strMeasure8: "",
        strMeasure9: "",
        strMeasure10: "",
        strMeasure11: "",
        strMeasure12: "",
        strMeasure13: "",
        strMeasure14: "",
        strMeasure15: "",
        strMeasure16: "",
        strMeasure17: "",
        strMeasure18: "",
        strMeasure19: "",
        strMeasure20: "",
        strSource: "",
        strImageSource: "",
        strCreativeCommonsConfirmed: "",
        dateModified: ""
    });

    
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        function fetchRecipe() {
            fetch("https://www.themealdb.com/api/json/v1/1/random.php")
                .then((res) => res.json())
                .then((data) => setRecipe(data.meals[0])) // Déstructurer correctement les données
                .catch((err) => console.error(err));
        }

        function avMinuit() {
            const now = new Date();
            const minuit = new Date();
            minuit.setHours(24, 0, 0, 0); 
            return minuit.getTime() - now.getTime();
        }

        function newFetch() {
            fetchRecipe(); 

            const delaiMinuit = avMinuit();

            setTimeout(() => {
                fetchRecipe(); 
                setInterval(fetchRecipe, 86400000); 
            }, delaiMinuit);
        }

        newFetch(); 
    }, []); 


// tant qu'ils existent ajout mesure et ingredient dans tableau pour le recuperer et l'afficher
    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe[`strIngredient${i}`];
            const measure = recipe[`strMeasure${i}`];
            if (ingredient) {
                ingredients.push(`${measure} ${ingredient}`);
            }
        }
        return ingredients;
    };

    return (
        <div className='recipe'>
            <h1>Recipe Of The Day</h1>
            <p>{recipe.strMeal}</p> 
            {/* <p>{recipe.strDrinkAlternate}</p> */}
            <p>{recipe.strInstructions}</p>
            <img className="img_recipe" src={recipe.strMealThumb} alt={recipe.strMeal} />
            {/* Bouton pour ouvrir la modale */}
            <button onClick={() => setVisible(true)}>Voir les détails</button>

            {visible && <div className="blur-background" onClick={() => setVisible(false)}></div>}

            {/* Modale pour afficher les détails */}
            <dialog className="dialog" open={visible}>
                <div>
                    <h2>{recipe.strMeal} - Détails</h2>
                    <h3>Ingrédients</h3>
                    <ul>
                        {getIngredients().map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <h3>Instructions</h3>
                    <p>{recipe.strInstructions}</p>
                    <button onClick={() => setVisible(false)}>Fermer</button>
                </div>
            </dialog>
        </div>
    );
}

export default RecipeOfTheDay;
