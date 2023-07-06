import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import Filter from "./pages/Filter";
import NotFound from "./pages/NotFound";
import "./index.css";
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route index element={<Home />}></Route>
          {/* <Route path="/filter" element={<Filter />}></Route> */}
          <Route path="/recipes/:id" element={<Recipe />}></Route>
          <Route path="/recipes/:id/edit" element={<Edit />}></Route>
					<Route path="/recipes/:id/delete" element={<Delete />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
