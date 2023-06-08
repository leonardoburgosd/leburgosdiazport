import "../../styles/estilos.css";
import "../tecnologias/tecnologias.css";

function Tecnologias() {
  let icons = [
    "react",
    "html5",
    "css3",
    "javascript",
    "github",
    "githubactions",
    "ubuntu",
  ];
  return (
    <section className="mis-tecnologias">
      <p>Esta web fue desarrollada con:</p>
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[0] + ".svg")}
        alt=""
      />
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[1] + ".svg")}
        alt=""
      />
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[2] + ".svg")}
        alt=""
      />
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[3] + ".svg")}
        alt=""
      />
      <p>Desplegado con:</p>
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[4] + ".svg")}
        alt=""
      />
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[5] + ".svg")}
        alt=""
      />
      <img
        className="iconos"
        src={require("../../styles/icons/" + icons[6] + ".svg")}
        alt=""
      />
    </section>
  );
}

export default Tecnologias;
