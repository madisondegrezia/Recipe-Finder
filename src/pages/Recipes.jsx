import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewRecipe from "../components/NewRecipe";
import "../index.css";

const Recipes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //const [recipes, setRecipes] = useState(recipeList);
  const [recipes, setRecipes] = useState([]);

  console.log(recipes)

  /* Fetching data from server */
  const getData = async () => {
		const url = 'http://localhost:3000/recipeList';
		setLoading(true);
		setError(false);
		try {
			const request = await fetch(url);
			const response = await request.json();
			setRecipes(response);
		} catch (e) {
			setError('Error: ' + e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getData();
	}, []);

  return (
    <>
      {error && <ErrorAlert>{error}</ErrorAlert>}
      {!error && loading && (
        <div className="max-w-[230px]">
          <Skeleton count="10" />
        </div>
      )}
      {!error && !loading && (
        <>
          <div className="cards">
            {/* recipeList.map((recipe) => )*/}
            {recipes.map((recipe) => {
              const { id, recipeName, image, meal } =
                recipe;

              return (
                
                <div key={`${recipeName}${id}`} className="cards--card">
                 <Link id="a" to={`/recipes/${recipe.id}`}>
                  <div className="grow">
                    <img
                      className="cards--image"
                      src={image}
                      alt={recipeName}
                    />
                  </div>
                  </Link>
                  <div className="cards--text-content">
                    <p className="cards--name">{recipeName}</p>
                    <span className="cards--meal">{meal}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <NewRecipe />
        </>
      )}
    </>
  );
};

export default Recipes;
