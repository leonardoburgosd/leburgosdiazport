import "../cabecera/cabecera.css";
import React, { useState  } from "react";
function Cabecera() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed-top">
      <nav>
        <a className="logo" href="/">
          Leonardo<strong>Burgos</strong>
        </a>
        <button className="menu-icono" onClick={handleClick}>
          <i className="fa fa-bars"></i>
        </button>
        <div className="menu ">
          <ul className={isMenuOpen  ? "show" : ""}>
            <li>
              <a className="element" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="element show" href="#sobre-mi">
                Sobre mi
              </a>
            </li>
            <li>
              <a className="element show" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li>
              <a
                className="blog-button"
                target="_blank"
                rel="noopener noreferrer"
                href="https://codcafein.azurewebsites.net"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Cabecera;
