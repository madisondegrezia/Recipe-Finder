import recipeList from "../utils/recipeList";
import { useState, useEffect } from "react";

const Filter = () => {
  // List of all recipes satisfing all the filters
  const [filteredList, setFilteredList] = useState(recipeList);

  // Selected Meal type filter
  const [selectedMeal, setSelectedMeal] = useState("");

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

  const handleMealChange = (event) => {
    setSelectedMeal(event.target.value);
  };

  // search component
  const [searchInput, setSearchInput] = useState("");
  //     set search parameters
  //     we only what to search countries by capital and name
  //     this list can be longer if you want
  //     you can search countries even by their population
  // just add it to this array
  const [searchParam] = useState(["recipeName"]);

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
    var filteredData = filterByMeal(recipeList);
    setFilteredList(filteredData);
  });

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
        placeholder="Search by name..."
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
