import { useState, useEffect } from "react";
import RecipeForm from "./RecipeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Modal from "../ui/Modal";

const NewRecipe = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recipes, setRecipes] = useState([])

  const startEditingHandler = () => {
    setIsEditing(true);
    setIsModalVisible(true)
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
    setIsModalVisible(false);
  };

  const onAddRecipe = (newRecipe) => {
    // modal should close
    stopEditingHandler()
    // new recipe should be added to the DOM
    setRecipes((recipes) => {
      return [...recipes, newRecipe];
    });
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        stopEditingHandler();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }); 

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler} className='new-expense-btn'>
          Add New Recipe <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      )}
      {isEditing && (
        <Modal isVisible={isModalVisible} hideModal={stopEditingHandler}>
          <RecipeForm
            onAddRecipe={onAddRecipe}
            onCancel={stopEditingHandler}
          />
        </Modal>
      )}
    </div>
  );
};

export default NewRecipe;
