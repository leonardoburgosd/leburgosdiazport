import React from "react";
import ReactDOM from "react-dom/client";
import Cabecera from "./seccions/cabecera/cabecera";
import Inicio from "./seccions/inicio/inicio";
import SobreMi from "./seccions/sobremi/sobremi";
import Proyectos from "./seccions/proyectos/proyectos";
import Footer from "./seccions/footer/footer";
import Tecnologias from "./seccions/tecnologias/tecnologias";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Cabecera></Cabecera>
    <Inicio></Inicio>
    <SobreMi></SobreMi>
    <Proyectos></Proyectos>
    <Tecnologias></Tecnologias>
    <Footer></Footer>
  </>
);