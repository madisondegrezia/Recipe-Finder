import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import "../index.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Edit = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [editing, setEditing] = useState(true);
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [meal, setMeal] = useState("");

  /* Fetching data from server */
  const getRecipeData = async () => {
    const url = `http://localhost:3000/recipeList/${params["id"]}`;
    setLoading(true);
    setError(false);
    try {
      const request = await fetch(url);
      const response = await request.json();
      setRecipeInfo(response);
      setRecipeName(response.recipeName);
      setImage(response.image);
      setIngredients(response.ingredients);
      setDirections(response.directions);
      setMeal(response.meal);
      console.log(response.recipeName);
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  const updateRecipe = async () => {
    const url = `http://localhost:3000/recipeList/${params["id"]}`;
    const preparedRecipe = {
        recipeName: recipeName,
        image: image,
        ingredients: ingredients,
        directions: directions,
        meal: meal,
    }
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preparedRecipe),
    });
    console.log("response", response);
    setEditing(false);
  };

  useEffect(() => {
    getRecipeData();
  }, []);

  if (!editing) {
    return (
      <>
        {!error && !loading && (
          <div>
            <h1 className="text-xl mb-3">Recipe was updated successfully!</h1>
            <Link to={"/recipes"}>
              <div>
                <a
                  href="#_"
                  className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-sky-300 border-2 border-sky-300 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="absolute left-0 block w-full h-0 transition-all bg-sky-300 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </span>
                  <span className="relative">Go Back</span>
                </a>
              </div>
            </Link>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Edit Recipe</h1>
      <form className="py-2">
        <label>
          <h2>Recipe Name</h2>
        </label>
        <input
          type="text"
          size="35"
          className="input"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
        <label>
          <h2>Image</h2>
        </label>
        <input
          type="text"
          size="35"
          className="input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>
          <h2>Ingredients</h2>
        </label>
        <textarea
          type="text"
          value={ingredients}
          className="input"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <label>
          <h2>Directions</h2>
        </label>
        <textarea
          type="text"
          value={directions}
          className="input"
          onChange={(e) => setDirections(e.target.value)}
        />
        <label>
          <h2>Meal</h2>
        </label>
        <textarea
          type="text"
          value={meal}
          className="input"
          onChange={(e) => setMeal(e.target.value)}
        />
      </form>

      <div>
        <div className="py-5" onClick={updateRecipe}>
          <a
            href="#_"
            className="relative inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              Update
            </span>
          </a>
        </div>

        <Link to={`/recipes/${recipeInfo.id}`}>
          <div className="py-5" onClick={() => setEditing(false)}>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Cancel
              </span>
            </a>
          </div>
        </Link>
      </div>
    </>
  );

  // return(
  //     <p>Edit post!</p>
  // )
};

export default Edit;
