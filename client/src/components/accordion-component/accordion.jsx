"use client";
import { Accordion } from "react-bootstrap";
import { useState } from 'react';
import styles from './accordion.module.css';

function RecipeAccordion({eventKey, title, onSave, ingredients = [], instructions = ''}) {
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(!saved);
        onSave();  // Call the function passed in via props to save the recipe
    };
    
    return (
        <Accordion className={styles.accordionContainer}>
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                    <h5>Ingredients:</h5>
                    <ul>
                        {ingredients.length > 0 ? (
                            ingredients.map((ingredient, i) => (
                                <li key={i}>
                                    {ingredient.name} - {ingredient.amount?.metric?.value || 'N/A'} {ingredient.amount?.metric?.unit || ''}
                                </li>
                            ))
                        ) : (
                            <p>No ingredients found for this recipe.</p>
                        )}
                    </ul>
                    <h5>Instructions:</h5>
                    {instructions ? (
                        <p>{instructions}</p>
                    ) : (
                        <p>No instructions found for this recipe.</p>
                    )}
                    <div>
                        <button onClick={handleSave}>
                            {saved ? "❤️" : "🤍"}
                        </button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default RecipeAccordion;