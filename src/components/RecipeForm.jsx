import React, { useState } from "react";

const RecipeForm = (props) => {
  const [enteredRecipeName, setEnteredRecipeName] = useState("");
  const [enteredImageUrl, setEnteredImageUrl] = useState("");
  const [enteredIngredients, setEnteredIngredients] = useState("");
  const [enteredDirections, setEnteredDirections] = useState("")
  const [enteredMeal, setEnteredMeal] = useState("")

  const recipeNameChangeHandler = (event) => {
    setEnteredRecipeName(event.target.value);
  };

  const imageUrlChangeHandler = (event) => {
    setEnteredImageUrl(event.target.value);
  };

  const ingredientsChangeHandler = (event) => {
    setEnteredIngredients(event.target.value);
  };

  const directionsChangeHandler = (event) => {
    setEnteredDirections(event.target.value);
  };

  const mealChangeHandler = (event) => {
    setEnteredMeal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const recipeData = {
      recipeName: enteredRecipeName,
      image: enteredImageUrl,
      ingredients: enteredIngredients,
      directions: enteredDirections,
      meal: enteredMeal
    };

    props.onSaveExpenseData(recipeData);
    setEnteredRecipeName("");
    setEnteredImageUrl("");
    setEnteredIngredients("");
    setEnteredDirections("");
    setEnteredMeal("")
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-recipe__controls">
        <div className="new-recipe__control">
          <label>Recipe Name</label>
          <input
            type="text"
            value={enteredRecipeName}
            onChange={recipeNameChangeHandler}
          />
        </div>
        <div className="new-recipe__control">
          <label>Image URL</label>
          <input
            type="text"
            value={enteredImageUrl}
            onChange={imageUrlChangeHandler}
          />
        </div>
        <div className="new-recipe__control">
          <label>Ingredients</label>
          <input
            type="text"
            value={enteredIngredients}
            onChange={ingredientsChangeHandler}
          />
        </div>
        <div className="new-recipe__control">
          <label>Directions</label>
          <input
            type="text"
            value={enteredDirections}
            onChange={directionsChangeHandler}
          />
        </div>
        <div className="new-recipe__control">
          <label>Meal Type</label>
          <input
            type="text"
            value={enteredMeal}
            onChange={mealChangeHandler}
          />
        </div>
       
      </div>
      <div className="new-recipe__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add New Recipe</button>
      </div>
    </form>
  );
};

export default RecipeForm;
