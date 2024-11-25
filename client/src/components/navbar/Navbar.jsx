import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HomeHub </span>
        </Link>
        {user ? (
          <span className="welcomeMessage">Bienvenido, {user.username}</span>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Registro</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Inicio de Sesion</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
