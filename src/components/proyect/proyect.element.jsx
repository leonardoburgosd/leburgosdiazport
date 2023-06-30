import "../../styles/estilos.css";
import "../proyect/proyect.element.css";

function elementoProyecto({ link, title, descripcion, img }) {
  return (
    <div className="proyect-element">
      <div className="content-element">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <p>{descripcion}</p>
      </div>
      <img src={require("../../styles/img/" + img)} alt="" />
    </div>
  );
}

export default elementoProyecto;
