import Container from "../components/Container";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

const Recipe = () => {
  const { id } = useParams();

  const [recipeInfo, setRecipeInfo] = useState({ id: {} });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  /* Fetching data from server */
  const getRecipeData = async () => {
    const url = `http://localhost:3000/recipeList/${id}`;
    setLoading(true);
    setError(false);
    try {
      const request = await fetch(url);
      const response = await request.json();
      setRecipeInfo(response);
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeData();
  }, []);

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
          <div
            className="card m-3 max-w-5xl mx-auto"
            key={`${recipeInfo.recipeName}${recipeInfo.meal}`}
          >
            <img src={recipeInfo.image} alt={recipeInfo.recipeName} />
            <div className="container">
              <div className="flex flex-row pt-3 cont">
                <p className="cards--name">{recipeInfo.recipeName}</p>
                <span className="cards--meal">{recipeInfo.meal}</span>
              </div>
              <p className="m-4">
                <i>Ingredients: {recipeInfo.ingredients}</i>
              </p>
              <p className="mb-4">
                <u>Directions: </u>
                {recipeInfo.directions}
              </p>
            </div>
            <div className="flex flex-row-reverse p-2 gap-3">
              <Link to={`/recipes/${recipeInfo.id}/delete`}>
                <div>
                  <a
                    href="#_"
                    className="relative inline-block px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">
                      <FaTrash className="text-2xl" />
                    </span>
                  </a>
                </div>
              </Link>
              <Link to={`/recipes/${recipeInfo.id}/edit`}>
                <div>
                  <a
                    href="#_"
                    className="relative inline-block px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-sky-200 border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">
                      <FaEdit className="text-2xl" />
                    </span>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Recipe;
