import '../../styles/estilos.css'
import '../skills/skillsbutton.css'

function habilidadesButton({ name, svg }) {
  return (
    <li className="icon">
      <button className='skill-button'>
        <img  src={require("../../styles/icons/" + svg + ".svg")} alt="" />
        <small>{name}</small>
      </button>
    </li>
  );
}

export default habilidadesButton;
