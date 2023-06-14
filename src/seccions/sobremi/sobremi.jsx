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
            Técnico informático y bachiller en Sistemas con más de 4 años de
            experiencia en desarrollo en aplicaciones web y escritorio .NET
            Framework y .NET Core.
          </p>
          <a
            href="https://drive.google.com/file/d/1bMwObF4UClHvphWxBoTo0apzw78elyMH/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
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
            <HabilidadesButton name="C#" svg="csharp"></HabilidadesButton>
            <HabilidadesButton
              name="Sql Server"
              svg="mssql"
            ></HabilidadesButton>
            <HabilidadesButton name="Angular" svg="angular"></HabilidadesButton>
            <HabilidadesButton name="Html" svg="html5"></HabilidadesButton>
            <HabilidadesButton name="Css" svg="css3"></HabilidadesButton>
            <HabilidadesButton name="Github" svg="github"></HabilidadesButton>
            <HabilidadesButton
              name="Javascript"
              svg="javascript"
            ></HabilidadesButton>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
