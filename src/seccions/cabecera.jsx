import '../styles/estilos.css'

 function Cabecera() {
  return (
    <header class="fixed-top">
      <nav>
        <a class="logo" href="/">
          Leonardo<strong>Burgos</strong>
        </a>
        <button class="menu-icono">
          <i class="fa fa-bars"></i>
        </button>
        <div class="menu">
          <ul>
            <li>
              <a class="element" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a class="element" href="#sobre-mi">
                Sobre mi
              </a>
            </li>
            <li>
              <a class="element" href="#proyectos">
                Proyectos
              </a>
            </li>
            <li>
              <a class="blog-button" href="blog.html">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Cabecera;