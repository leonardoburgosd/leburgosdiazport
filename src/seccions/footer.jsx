import '../styles/estilos.css'

function Footer() {
    return (
      <footer id="contacto" class="contacto">
        <a
          class="social"
          href="https://github.com/leonardoburgosd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          class="social"
          href="https://www.youtube.com/channel/UCyFkk78UPODQ1mhSTXCkiOA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-youtube"></i>
        </a>
        <a
          class="social"
          href="https://codcafein.azurewebsites.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-globe"></i>
        </a>
        <a
          class="social"
          href="https://www.linkedin.com/in/leonardo-burgos-diaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </footer>
    );
  }

  export default Footer;