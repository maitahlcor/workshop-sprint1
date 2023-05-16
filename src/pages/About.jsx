import bloody from '../assets/bloody.jpg'
import './about.css'
const AboutPage = () => {
  return (
    <>
      <h1 className="about--title">About me</h1>
      <div className="about-container">
        <div className="about-container__info">
          <img
            src={bloody}
            alt="author image"
            className="about-container--img"
          />
          <div className="about-container--aboutme">
            <h2 className="about-container--aboutme--name">
              Andres Lopez
            </h2>
            <p className="about-container--aboutme--text">
             Desarrollador Fullstack en formacion, escritor aficionado con pasion por la creacion y solucion de problemas usando la logica y la programacion
            </p>
          </div>
        </div>
        <div className="about-container__skills">
          <h2 className="about-container__skills--title">What I learn</h2>
          <ul className="about-container__skills--list">
            <li>CSS y HTML en diseño de paginas web</li>
            <li>Crear apps sigle page usando React </li>
            <li>Crear apps y  desplegar ambos servicios tanto backend como forntend</li>
          </ul>
        </div>
        <div className="about-container__media">
        <h3>
            email:
            <a href="mailto:juandavidp76@gmail.com"> eomerlopez@gmail.com</a>
          </h3>
          <h3>
            github: <a href="https://github.com/maitahlcor"> @maitahlcor</a>
          </h3>
        
        </div>
      </div>
    </>
  );
}

export default AboutPage;
