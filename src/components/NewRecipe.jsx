import { useState } from "react";
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
    // new job should be added to the DOM
    setRecipes((recipes) => {
      return [...recipes, newRecipe];
    });
  };


  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>
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
