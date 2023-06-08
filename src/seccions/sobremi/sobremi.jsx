import HabilidadesButton from "../../components/skills/habilidades.button";
import "../sobremi/sobremi.css";

function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="contenido">
        <div className="descripcion">
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
            href="https://drive.google.com/file/d/1bMwObF4UClHvphWxBoTo0apzw78elyMH/view?usp=sharing"
            target="_blank" rel="noreferrer"
            className="curriculum-button"
          >
            Ver Curriculum
          </a>
        </div>
      </div>
      <div className="habilidades">
        <h1 className="titulo">Habilidades</h1>
        <div className="tecnologias">
          <ul>
            <HabilidadesButton name="C#"          svg="csharp"></HabilidadesButton>
            <HabilidadesButton name="Sql Server"  svg="mssql"></HabilidadesButton>
            <HabilidadesButton name="Angular"     svg="angular"></HabilidadesButton>
            <HabilidadesButton name="Html"        svg="html5"></HabilidadesButton>
            <HabilidadesButton name="Css"         svg="css3"></HabilidadesButton>
            <HabilidadesButton name="Github"      svg="github"></HabilidadesButton>
            <HabilidadesButton name="Javascript"  svg="javascript"></HabilidadesButton>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
