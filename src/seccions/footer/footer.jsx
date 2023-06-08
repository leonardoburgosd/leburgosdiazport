import "../footer/footer.css";

function Footer() {
  return (
    <footer id="contacto" className="contacto">
      <a
        className="social"
        href="https://github.com/leonardoburgosd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="social"
        href="https://www.youtube.com/channel/UCyFkk78UPODQ1mhSTXCkiOA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <a
        className="social"
        href="https://codcafein.azurewebsites.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-globe"></i>
      </a>
      <a
        className="social"
        href="https://www.linkedin.com/in/leonardo-burgos-diaz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </footer>
  );
}

export default Footer;
