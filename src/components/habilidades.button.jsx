import '../styles/estilos.css'

function habilidadesButton({ name, svg }) {
  return (
    <li class="icon">
      <button>
        <img src={require("../styles/icons/" + svg + ".svg")} alt="" />
        <small>{name}</small>
      </button>
    </li>
  );
}

export default habilidadesButton;
