import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../inicio/inicio.css";

function Inicio() {
  const [text] = useTypewriter({
    words: [
      "Desarrollador web",
      "Técnico informático",
      "Programador .NET",
      "Bachiller en Ingeniería de Sitemas",
    ],
    loop: false,
    delay: 75,
  });

  return (
    <section id="inicio" className="inicio">
      <div className="contenido-inicio">
        <h1>Hola,</h1>
        <h1>Soy Leonardo Burgos Díaz</h1>
        <h1 className="tipos">
          {text}
          <Cursor cursorColor="#fff" />
        </h1>
      </div>
    </section>
  );
}
export default Inicio;
