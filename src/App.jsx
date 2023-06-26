import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import "./index.css";
import { useState } from "react";
import recipeList from "./utils/recipeList";
import NewRecipe from "./components/NewRecipe";

function App() {
  const [recipes, setRecipes] = useState(recipeList);
  console.log(recipes)

  const addRecipeHandler = (recipe) => {
    setRecipes((prevRecipes) => {
      return [...prevRecipes, recipe];
    });
    recipeList.push(recipe)
  };


  return (
    <>
      <Header />
       <Container>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="/recipes/:id" element={<Recipe />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container> 
      <NewRecipe onAddRecipe={addRecipeHandler}/>
      <Footer />
    </>
  );
}

export default App;
