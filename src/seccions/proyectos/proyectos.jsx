import "../proyectos/proyectos.css";
function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="title">
        <h1>Proyectos</h1>
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://www.youtube.com/watch?v=whdph6Q_oek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Encender un led
          </a>
          <p>Proyecto en Arduino, WinForms, Firebase y Xamarin</p>
        </div>
        <img src={require("../../styles/img/firebaseProyc.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://codcafein.azurewebsites.net/2018/01/14/aplicacion-de-escritorio-con-wpf-y-web-api-c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Azure Web API y WPF
          </a>
          <p>Proyecto de escritorio con .Net Framework, SqlServer y WPF</p>
        </div>
        <img src={require("../../styles/img/wpfProyec.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://www.youtube.com/watch?v=63l2ByJUAUM&t=120s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akamika
          </a>
          <p>Proyecto MVC en C# y SQL Server</p>
        </div>
        <img src={require("../../styles/img/akamikaProyc.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://github.com/leonardoburgosd/integra-group"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <p>Proyecto de diseño de registro y login en Photoshop </p>
        </div>
        <img src={require("../../styles/img/integragroup.jpg")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://github.com/leonardoburgosd/bd-structure"
            target="_blank"
            rel="noopener noreferrer"
          >
            BCreate
          </a>
          <p>Estructura SQL para crear un blog</p>
        </div>
        <img src={require("../../styles/img/bcCreate.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://github.com/leonardoburgosd/bd-structure"
            target="_blank"
            rel="noopener noreferrer"
          >
            ButtonStyle
          </a>
          <p>Proyecto con HTML y CSS de estilo de botones</p>
        </div>
        <img src={require("../../styles/img/buttonstyleportada.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://github.com/leonardoburgosd/leonardoburgosd.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi portafolio
          </a>
          <p>Proyecto HTML y CSS (versión 1) </p>
        </div>
        <img src={require("../../styles/img/miPortafolio.png")} alt="" />
      </div>
      <div className="proyect-element">
        <div className="content-element">
          <a
            href="https://www.figma.com/file/PJXVqcBYWrqIfuBgT3HUny/Portafolio?type=design&node-id=0%3A1&mode=design&t=t4aeTVBxPirM40eO-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi portafolio
          </a>
          <p>Proyecto HTML y CSS (versión 1) </p>
        </div>
        <img src={require("../../styles/img/portfoliov3.png")} alt="" />
      </div>
    </section>
  );
}
export default Proyectos;
