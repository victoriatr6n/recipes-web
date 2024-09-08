"use client";
import styles from './style.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RecipeAccordion from '@/components/accordion-component/accordion';

function SavedRecipes() {
    const [savedRecipes, setSavedRecipes] = useState([]);

    useEffect(() => {
        const fetchSavedRecipes = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/savedRecipes');
                console.log('API Response:', response.data);
                setSavedRecipes(response.data);
            } catch (error) {
                console.error('Error fetching saved recipes', error);
            }
        };

        fetchSavedRecipes();
    }, []);

    return (
        <div className={styles.recipeList}>
            <h2>Saved Recipes</h2>
            {savedRecipes.length > 0 ? (
                savedRecipes.map((recipe, index) => (
                    <div key={index} className={styles.recipeItem}>
                        <RecipeAccordion
                            eventKey={index.toString()}
                            title={recipe.title}
                            ingredients={recipe.ingredientsUsed || []}
                            instructions={recipe.instructions || ''}
                        />
                    </div>
                ))
            ) : (
                <p>No saved recipes yet.</p>
            )}
        </div>
    );
}

export default SavedRecipes;
