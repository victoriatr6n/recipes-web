const express = require('express');
const router = express.Router();
const SavedRecipe = require('../models/saveRecipe');  // MongoDB model

// POST route to save a recipe
router.post('/savedRecipes', async (req, res) => {
    try {
        const savedRecipe = new SavedRecipe(req.body);  // Create a new instance of the model with the recipe data
        await savedRecipe.save();  // Save the recipe to the database
        res.status(201).json(savedRecipe);
    } catch (error) {
        res.status(500).json({ error: 'Error saving the recipe' });
    }
});

router.get('/savedRecipes', async (req, res) => {
  try {
      const savedRecipes = await SavedRecipe.find();  // Fetch all saved recipes
      res.status(200).json(savedRecipes);
  } catch (error) {
      res.status(500).json({ error: 'Error fetching saved recipes' });
  }
});

module.exports = router;
