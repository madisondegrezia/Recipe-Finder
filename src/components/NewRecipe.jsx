import { useState } from "react";
import RecipeForm from "./RecipeForm";

const NewRecipe = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveRecipeDataHandler = (enteredRecipeData) => {
    const recipeData = {
      ...enteredRecipeData,
      id: Math.random().toString(),
    };
    props.onAddRecipe(recipeData);
    console.log(recipeData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Recipe</button>
      )}
      {isEditing && (
        <RecipeForm
          onSaveExpenseData={saveRecipeDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewRecipe;
