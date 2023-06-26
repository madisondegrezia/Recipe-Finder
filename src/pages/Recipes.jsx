import { useState } from "react";
import { Link } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import recipeList from "../utils/recipeList";
import "../index.css";

const Recipes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [list, setList] = useState(recipeList)

  //console.log(list);

  //   return (
  //     <div className="cards">
  //       {recipeList.map((recipe) => {
  //         const { recipeName, image, ingredients, directions, meal } = recipe;

  //         return (
  //           <div key={`${recipeName}${meal}`} className="cards--card">
  //             <div className="grow">
  //               <img className="cards--image" src={image} alt={recipeName} />
  //             </div>
  //             <div className="cards--text-content">
  //               <p className="cards--name">{recipeName}</p>
  //               <span className="cards--meal">{meal}</span>
  //               <p className="cards--ingredients">
  //                 <i>Ingredients: {ingredients}</i>
  //               </p>
  //               <br />
  //               <p className="cards--directions">
  //                 <u>Directions: </u>
  //                 {directions}
  //               </p>
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );

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
            {recipeList.map((recipe) => {
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
        </>
      )}
    </>
  );
};

export default Recipes;
