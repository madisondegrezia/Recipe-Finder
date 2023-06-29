import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const initialRecipeFormState = {
  recipeName: " ",
  image: " ",
  ingredients: " ",
  directions: " ",
  meal: " ",
};

const RecipeForm = ({ onAddRecipe }) => {
  const [recipeFormState, setRecipeFormState] = useState(
    initialRecipeFormState
  );

  const handleInputChange = (e) => {
    setRecipeFormState((recipeFormState) => {
      return {
        ...recipeFormState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddRecipeFormSubmit = async (e) => {
    e.preventDefault();
    // modal should close
    // form should clear
    setRecipeFormState(initialRecipeFormState);

    // send request to save job to db and get response
    const response = await fetch("http://localhost:3000/recipeList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipeFormState),
    });
    console.log("response", response);
    const savedRecipe = await response.json();
    console.log("savedRecipe", savedRecipe);
    onAddRecipe(savedRecipe);
  };

  return (
    <form onSubmit={handleAddRecipeFormSubmit}>
      <div className="new-recipe__controls">
        <div className="new-recipe__control">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.recipeName}
            type="text"
            name="recipeName"
            id="recipeName"
          />
        </div>
        <div className="new-recipe__control">
          <label htmlFor="image">Image URL</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.image}
            type="text"
            name="image"
            id="image"
          />
        </div>
        <div className="new-recipe__control">
          <label htmlFor="ingredients">Ingredients</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.ingredients}
            type="text"
            name="ingredients"
            id="ingredients"
          />
        </div>
        <div className="new-recipe__control">
          <label htmlFor="directions">Directions</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.directions}
            type="text"
            name="directions"
            id="directions"
          />
        </div>
        <div className="new-recipe__control">
          <label htmlFor="meal">Meal Type</label>
          <input
            onChange={handleInputChange}
            value={recipeFormState.meal}
            type="text"
            name="meal"
            id="meal"
          />
        </div>
        <button type="submit" className='new-expense-btn'>
          Add New Recipe <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        {/* <input
        type="submit"
      ></input> */}
      </div>
    </form>
  );
};

export default RecipeForm;
