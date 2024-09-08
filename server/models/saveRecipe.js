// /server/models/recipeModel.js
const mongoose = require('mongoose');

// Define the Recipe schema
const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: [
        {
            name: String,
            amount: String,
        }
    ],
    instructions: {
        type: String,
        required: true,
    }
});

// Create the Recipe model
const savedRecipe = mongoose.model('Recipe', recipeSchema);

module.exports = savedRecipe;
