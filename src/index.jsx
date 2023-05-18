import React from "react";
import ReactDOM from "react-dom/client";
import Cabecera from "./seccions/cabecera";
import Inicio from "./seccions/inicio";
import SobreMi from "./seccions/sobremi";
import Proyectos from "./seccions/proyectos";
import Footer from "./seccions/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Cabecera></Cabecera>
    <Inicio></Inicio>
    <SobreMi></SobreMi>
    <Proyectos></Proyectos>
    <Footer></Footer>
  </div>
);