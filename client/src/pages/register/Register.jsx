import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
    city: "",
    phone: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", userData); // Cambia la URL si es necesario
      navigate("/login"); // Redirige al login después de registrar
    } catch (err) {
      setError(err.response?.data || "Ocurrió un error durante el registro.");
    }
  };

  return (
    <div className="register">
      <div className="rContainer">
        <h1>Registrarse</h1>
        <input
          type="text"
          id="username"
          placeholder="Nombre de usuario"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email"
          id="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          id="password"
          placeholder="Contraseña"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          id="country"
          placeholder="País"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          id="city"
          placeholder="Ciudad"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          id="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          className="rInput"
        />
        <button onClick={handleRegister} className="rButton">
          Registrarse
        </button>
        {error && <span className="rError">{error}</span>}
        <button
          onClick={() => navigate("/login")}
          className="rBackButton"
        >
          Volver al Login
        </button>
      </div>
    </div>
  );
};

export default Register;
