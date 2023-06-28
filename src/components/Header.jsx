import Container from "./Container";
import { NavLink as RouterLink } from "react-router-dom";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
          <img src={logo2} />
        </RouterLink>
        <RouterLink className="text-2xl title" to="/">
          Taste of Home
        </RouterLink>
        <RouterLink className={getClassName} to="/">
          Home
        </RouterLink>
        <RouterLink className={getClassName} to="/Filter">
          Filter <FontAwesomeIcon icon={faMagnifyingGlass} />
        </RouterLink>
      </nav>
    </Container>
  );
};

export default Header;
