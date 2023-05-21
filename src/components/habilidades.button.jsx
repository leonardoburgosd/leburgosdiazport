import '../styles/estilos.css'

function habilidadesButton({ name, svg }) {
  return (
    <li class="icon">
      <a href="#">
        <img src={require("../styles/icons/" + svg + ".svg")} alt="" />
        <small>{name}</small>
      </a>
    </li>
  );
}

export default habilidadesButton;
