import HabilidadesButton from "../components/habilidades.button";
import '../styles/estilos.css'

function SobreMi() {
  return (
    <section id="sobre-mi" class="sobre-mi">
      <div class="contenido">
        <div class="descripcion">
          <h1>Sobre mi</h1>
          <h2>Soy Leonardo Burgos Díaz</h2>
          <p>
            Técnico en Computación e Informática con más de cuatro años de
            experiencia como desarrollador web, egresado de Ingeniería de
            Sistemas Computacionales. Soy una persona que aprecia el
            conocimiento y por ello estoy en constante aprendizaje de nuevas
            tecnologías, me gusta aportar al equipo y mi desempeño se mantiene
            en momentos de alta presión.
          </p>
          <a
            href="https://drive.google.com/file/d/1jOab6iC7DRBLgFtvEnUnU_C3Ffe2tzwY/view?usp=sharing"
            target="_blank" rel="noreferrer"
            class="curriculum-button"
          >
            Ver Curriculum
          </a>
        </div>
      </div>
      <div class="habilidades">
        <h1 class="titulo">Habilidades</h1>
        <div class="tecnologias">
          <ul>
            <HabilidadesButton name="C#"          svg="csharp"></HabilidadesButton>
            <HabilidadesButton name="Sql Server"  svg="mssql"></HabilidadesButton>
            <HabilidadesButton name="Angular"     svg="angular"></HabilidadesButton>
            <HabilidadesButton name="Azure"       svg="azure"></HabilidadesButton>
            <HabilidadesButton name="Html"        svg="html5"></HabilidadesButton>
            <HabilidadesButton name="Css"         svg="css3"></HabilidadesButton>
            <HabilidadesButton name="Arduino"     svg="arduino"></HabilidadesButton>
            <HabilidadesButton name="Github"      svg="github"></HabilidadesButton>
            <HabilidadesButton name="Python"      svg="python"></HabilidadesButton>
            <HabilidadesButton name="Javascript"  svg="javascript"></HabilidadesButton>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
