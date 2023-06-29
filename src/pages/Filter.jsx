import recipeList from "../utils/recipeList";
import { useState, useEffect } from "react";

const Filter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // List of all recipes satisfing all the filters
  const [filteredList, setFilteredList] = useState([]);

  // Selected Meal type filter
  const [selectedMeal, setSelectedMeal] = useState("");

  // filter by meal function moved inside useEffect() to
  // prevent infinite re-rendering

  const handleMealChange = (event) => {
    setSelectedMeal(event.target.value);
  };

  // search component
  const [searchInput, setSearchInput] = useState("");

  //     set search parameters
  //     we only what to search recipes by recipe name
  const [searchParam] = useState(["recipeName"]);

  /* Fetching data from server */
  const getData = async () => {
    const url = "http://localhost:3000/recipeList";
    setLoading(true);
    setError(false);
    try {
      const request = await fetch(url);
      const response = await request.json();
      setFilteredList(response);
    } catch (e) {
      setError("Error: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  function search(items) {
    return items.filter((item) => {
      return searchParam.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchInput.toLowerCase()) > -1
        );
      });
    });
  }

  useEffect(() => {
    //getData()
    const filterByMeal = (filteredData) => {
      // Avoid filter for empty string
      if (!selectedMeal) {
        return filteredData;
      }

      const filteredMeals = filteredData.filter(
        (recipe) => recipe.meal.split(" ").indexOf(selectedMeal) !== -1
      );
      return filteredMeals;
    };
    var filteredData = filterByMeal(recipeList);
    setFilteredList(filteredData);
  }, [selectedMeal]);

  return (
    <>
      <div>Filter by Meal: </div>
      <select id="meal-input" value={selectedMeal} onChange={handleMealChange}>
        <option value="">---All---</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="dessert">Dessert</option>
      </select>
      <br />
      <br />
      {/* Search component */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <br />
      <br />
      <div className="cards">
        {search(filteredList).map((item, index) => {
          return (
            <div key={index} className="cards--card">
              <div className="grow">
                <img
                  className="cards--image"
                  src={item.image}
                  alt={item.recipeName}
                />
              </div>

              <div className="cards--text-content">
                <p className="cards--name">{item.recipeName}</p>
                <span className="cards--meal">{item.meal}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filter;
