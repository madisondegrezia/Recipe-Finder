
import { useState, useEffect } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import '../index.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Edit = () => {
    const params = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [editing, setEditing] = useState(true);
    const [recipeInfo, setRecipeInfo] = useState([]);

    /* Fetching data from server */
  const getRecipeData = async () => {
    const url = `http://localhost:3000/recipeList/${params['id']}`;
    setLoading(true);
    setError(false);
    try {
        const request = await fetch(url);
        const response = await request.json();
        setRecipeInfo(response);
    } catch (e) {
        setError('Error: ' + e.message);
    } finally {
        setLoading(false);
    }
};

const updateRecipe = async () => {
    const url = `http://localhost:3000/recipeList/${params['id']}`;
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("response", response);
      setEditing(false);
}

  useEffect(() => {
    getRecipeData();
  }, []);

    return(
        <p>Edit post!</p>
    )
}

export default Edit;