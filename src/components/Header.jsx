import Container from "./Container";
import { NavLink as RouterLink } from "react-router-dom";
import logo from '../images/logo.png'

const Header = () => {
  const getClassName = (props) => {
    return `${
      props.isActive ? "font-bold" : ""
    } hover:underline text-xl hover:text-sky-400 hover:scale-150 transition duration-300`;
  };

  return (
    <Container className="bg-cyan-600">
      <nav className="flex gap-10">
      <RouterLink className="logo" to="/">
          <img src={logo} />
        </RouterLink>
      <RouterLink className="text-2xl title" to="/">
          Taste of Home 
        </RouterLink>
        <RouterLink className={getClassName} to="/">
          Home
        </RouterLink>
        <RouterLink className={getClassName} to="/Favorites">
          Favorites
        </RouterLink>
      </nav>
    </Container>
  );
};

export default Header;
