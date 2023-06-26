import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipeList from "../utils/recipeList";
import React from "react";

const Recipe = () => {
  const { id } = useParams();

  const [recipeInfo, setRecipeInfo] = useState({ id: {} });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  return (
    <Container className="bg">
      {!error && !loading && (
        <div>
          <Link to={"/recipes"}>
            <button
              type="button"
              className="b-btn text-sky-700 border border-sky-700 hover:bg-sky-200 hover:text-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
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
              <span className="sr-only">Icon description</span>
            </button>
          </Link>
          <div>Recipe Info</div>
          {/* Trying to get individual info for a recipe */}
          <div className="cards">
            {recipeList.map((recipe) => {
              const { recipeName, image, ingredients, directions, meal } =
                recipe;

              return (
                <div key={`${recipeName}${meal}`} className="cards--card">
                  <div className="grow">
                    <img
                      className="cards--image"
                      src={image}
                      alt={recipeName}
                    />
                  </div>
                  <div className="cards--text-content">
                    <p className="cards--name">{recipeName}</p>
                    <span className="cards--meal">{meal}</span>
                    <p className="cards--ingredients">
                      <i>Ingredients: {ingredients}</i>
                    </p>
                    <br />
                    <p className="cards--directions">
                      <u>Directions: </u>
                      {directions}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
};

export default Recipe;
