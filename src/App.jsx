import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import NotFound from "./pages/NotFound";
import "./index.css";

function App() {
  return (
    <>
      <Header />
       <Container>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/Favorites" element={<Favorites />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Container> 
      {/* <Recipes />  */}
      <Footer />
    </>
  );
}

export default App;
