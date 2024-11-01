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

    // Code sur dialog inspiré du cours
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


    // const getIngredients = () => {
    //     const ingredients = [];
    //     for (let i = 1; i <= 20; i++) {
    //         const ingredient = recipe[`strIngredient${i}`];
    //         const measure = recipe[`strMeasure${i}`];
    //         if (ingredient) {
    //             ingredients.push(`${measure} ${ingredient}`);
    //         }
    //     }
    //     return ingredients;
    // };

    return (
        <div className='recipe'>
            <h1>Recipe Of The Day</h1>
            <p>{recipe.strMeal}</p> 
            <p>{recipe.strDrinkAlternate}</p>
            <p>{recipe.strInstructions}</p>
            <img className="img_recipe" src={recipe.strMealThumb} alt={recipe.strMeal} />
            {/* Bouton pour ouvrir la modale */}
            <button onClick={() => setVisible(true)}>Voir les détails</button>

            {/* Modale pour afficher les détails */}
            {/* {visible && ( */}
            <dialog open={visible}>

                <div>
                    <div>
                        <h2>{recipe.strMeal} - Détails</h2>
                        <h3>Ingrédients</h3>
                        <ul>
                            {/* {getIngredients().map((item, index) => (
                                <li key={index}>{item}</li>
                            ))} */}
                            <li>{recipe.strIngredient1}</li>
                            <li>{recipe.strIngredient2}</li>
                            <li>{recipe.strIngredient3}</li>
                            <li>{recipe.strIngredient4}</li>
                            <li>{recipe.strIngredient5}</li>
                            <li>{recipe.strIngredient6}</li>
                            <li>{recipe.strIngredient7}</li>
                            <li>{recipe.strIngredient8}</li>
                            <li>{recipe.strIngredient9}</li>
                            <li>{recipe.strIngredient10}</li>
                            <li>{recipe.strIngredient11}</li>
                            <li>{recipe.strIngredient12}</li>
                            <li>{recipe.strIngredient13}</li>
                            <li>{recipe.strIngredient14}</li>
                            <li>{recipe.strIngredient15}</li>
                            <li>{recipe.strIngredient16}</li>
                            <li>{recipe.strIngredient17}</li>
                            <li>{recipe.strIngredient18}</li>
                            <li>{recipe.strIngredient19}</li>
                            <li>{recipe.strIngredient20}</li>
                        </ul>
                        <h3>Instructions</h3>
                        <p>{recipe.strInstructions}</p>
                        <button onClick={() => setVisible(false)}>Fermer</button>
                    </div>
                </div>
            </dialog>
            {/* )} */}
        </div>
    );
}

export default RecipeOfTheDay;
