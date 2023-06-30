import "../proyectos/proyectos.css";
import ProyectElement from "../../components/proyect/proyect.element";

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <div className="title">
        <h1>Proyectos</h1>
      </div>

      <ProyectElement
        link="https://www.youtube.com/watch?v=whdph6Q_oek"
        title="IoT Básico"
        descripcion="Proyecto en Arduino, WinForms, Firebase y Xamarin"
        img="firebaseProyc.png"
      ></ProyectElement>

      <ProyectElement
        link="https://codcafein.azurewebsites.net/2018/01/14/aplicacion-de-escritorio-con-wpf-y-web-api-c/"
        title="Azure Web API y WPF"
        descripcion="Proyecto de escritorio con .Net Framework, SqlServer y WPF"
        img="wpfProyec.png"
      ></ProyectElement>

      <ProyectElement
        link="https://www.youtube.com/watch?v=63l2ByJUAUM&t=120s"
        title="Akamika"
        descripcion="Proyecto MVC en C# y SQL Server"
        img="akamikaProyc.png"
      ></ProyectElement>

      <ProyectElement
        link="https://github.com/leonardoburgosd/integra-group"
        title="Login"
        descripcion="Proyecto de diseño de registro y login en Photoshop"
        img="integragroup.jpg"
      ></ProyectElement>

      <ProyectElement
        link="https://github.com/leonardoburgosd/bd-structure"
        title="BCreate"
        descripcion="Estructura SQL para crear un blog"
        img="bcCreate.png"
      ></ProyectElement>

      <ProyectElement
        link="https://github.com/leonardoburgosd/button-styles"
        title="ButtonStyle"
        descripcion="Proyecto con HTML y CSS de estilo de botones"
        img="buttonstyleportada.png"
      ></ProyectElement>

      <ProyectElement
        link="https://github.com/leonardoburgosd/leonardoburgosd.github.io"
        title="Mi portafolio V1"
        descripcion="Proyecto HTML y CSS (versión 1)"
        img="miPortafolio.png"
      ></ProyectElement>

      <ProyectElement
        link="https://www.figma.com/file/PJXVqcBYWrqIfuBgT3HUny/Portafolio?type=design&node-id=0%3A1&mode=design&t=t4aeTVBxPirM40eO-1"
        title="Mi portafolio V3"
        descripcion="Portafolio en Figma"
        img="portfoliov3.png"
      ></ProyectElement>

      <ProyectElement
        link="https://dashboard.auth.leonardoburgosd.site"
        title="Auth.Dashboard"
        descripcion="Dashboard de sistema de autenticion (en desarrollo)"
        img="authdashboard.png"
      ></ProyectElement>
    </section>
  );
}
export default Proyectos;
