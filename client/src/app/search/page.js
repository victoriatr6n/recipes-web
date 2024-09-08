"use client"; // rendered on the client side

import { useState } from 'react';
import styles from './style.module.css';
import RecipeAccordion from '@/components/accordion-component/accordion';
import axios from 'axios';

export default function Search() {
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]); // store recipes with ingredients and instructions

    const handleIngredients = (event) => {
        setIngredient(event.target.value); // get ingredients
    }

    const handlePeople = (event) => {
        setNumberOfPeople(event.target.value);
    }

    const handleSaveRecipe = async (recipe) => {
        try {
            console.log(recipe);
            await axios.post('http://localhost:3001/api/savedRecipes', recipe);  // Send the request to save the recipe
            alert('Recipe saved successfully!');  // Show a success message
        } catch (error) {
            console.error('Error saving the recipe', error);  // Handle errors
        }
    }

    async function search(event) {
        event.preventDefault();

        const numPeople = parseInt(numberOfPeople, 10);
        if (isNaN(numPeople)) {
            alert("Please enter a valid number");
            return;
        }

        const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=${ingredient}&serving=${numPeople}&ignorePantry=true&ranking=1`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '0c3304fd50msh7936492fe9fe7b1p17fd71jsn192998a0895f',
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const updatedRecipes = await Promise.all(result.map(async (recipe) => { //get all recipes
                // Fetch ingredients and instructions for each recipe
                const recipeId = recipe.id;
                const instructionUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`; //get instructions
                const instuctionsOptions = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '0c3304fd50msh7936492fe9fe7b1p17fd71jsn192998a0895f',
                        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                };
                const ingredientUrl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/ingredientWidget.json`; //get ingredients
                const ingredientOptions = {
                    method: 'GET',
                    headers: {
                        'x-rapidapi-key': '0c3304fd50msh7936492fe9fe7b1p17fd71jsn192998a0895f',
                        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
                    }
                };

                try {
                    const instructionResponse = await fetch(instructionUrl, instuctionsOptions);
                    const recipeInstruction = await instructionResponse.json();

                    const ingredientResponse = await fetch(ingredientUrl, ingredientOptions);
                    const ingredientData = await ingredientResponse.json();
                    return { 
                        ...recipe, 
                        ingredientsUsed: recipeInstruction.extendedIngredients, 
                        instructions: recipeInstruction.instructions 
                    };
                } catch (error) {
                    console.error(error);
                    return { ...recipe, ingredientsUsed: ingredientData.ingredients, instructions: '' };
                }
            }));
            setRecipes(updatedRecipes); //add to array of recipes
        } catch (error) {
            console.error(error);
        }
    }

    
    return (
        <div className={styles.formContainer}>
            <form onSubmit={search} className={styles.centeredForm}>
                <div >
                    <label htmlFor="ingredients">Ingredients:  </label>
                    <input 
                        id="ingredients"
                        name="queryIngredients" 
                        type="text"
                        value={ingredient}
                        onChange={handleIngredients}
                    />   
                </div>

                <div >
                    <label htmlFor="numPeople">Number of People: </label>
                    <input 
                        id="numPeople"
                        name="queryPeople" 
                        type="text"
                        value={numberOfPeople}
                        onChange={handlePeople}
                    />
                </div>
                <button className={styles.buttons} type="submit">Search</button>
            </form>
            
            <div className={styles.recipeList}>
                {recipes.length > 0 ? (
                    recipes.map((recipe, index) => (
                        <div key={index} className={styles.recipeItem}>
                            <RecipeAccordion
                                eventKey={index.toString()}  // `eventKey` should be a string
                                title={recipe.title}
                                ingredients={recipe.ingredientsUsed || []}  // Ensure it’s an array
                                instructions={recipe.instructions || ''}
                                onSave={() => handleSaveRecipe(recipe)}  // Default to empty string if not available
                            />
                        </div>
                    ))
                ) : (
                    <p className={styles.norecipes}>No recipes found</p>
                )}
            </div>
        </div>
    );
}
