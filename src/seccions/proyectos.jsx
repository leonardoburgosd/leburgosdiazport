import "../styles/estilos.css";

function Proyectos() {
  return (
    <section id="proyectos" class="proyectos">
      <div class="title">
        <h1>Proyectos</h1>
      </div>
      <div class="proyect-element">
        <div class="content-element">
          <a href="https://www.youtube.com/watch?v=whdph6Q_oek" target="_blank">
            Encender un led
          </a>
          <p>Proyecto en Arduino, WinForms, Firebase y Xamarin</p>
        </div>
        <img src={require("../styles/img/firebaseProyc.png")} />
      </div>
      <div class="proyect-element">
        <div class="content-element">
          <a
            href="https://codcafein.azurewebsites.net/2018/01/14/aplicacion-de-escritorio-con-wpf-y-web-api-c/"
            target="_blank"
          >
            Azure Web API y WPF
          </a>
          <p>Proyecto de escritorio con .net Framework, SqlServer y WPF</p>
        </div>
        <img src={require("../styles/img/wpfProyec.png")} />
      </div>
      <div class="proyect-element">
        <div class="content-element">
          <a
            href="https://www.youtube.com/watch?v=63l2ByJUAUM&t=120s"
            target="_blank"
          >
            Akamika
          </a>
          <p>Proyecto MVC en C# y SQL Server</p>
        </div>
        <img src={require("../styles/img/akamikaProyc.png")} />
      </div>
    </section>
  );
}
export default Proyectos;
