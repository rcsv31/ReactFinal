import iconFacebook from "../../../images/iconFacebook.png";
import iconInstagram from "../../../images/iconInstagram.png";
import mayjuLogoBlanco from "../../../images/mayjuLogoBlanco.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="redesSociales">
        <p>Redes Sociales</p>
        <div className="iconosRedes">
          <a
            href="https://es-es.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconFacebook} alt="Logo de Facebook en color blanco" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconInstagram} alt="Logo de Instagram en color blanco" />
          </a>
        </div>
      </div>
      <div className="envioGratis">
        <img src={mayjuLogoBlanco} alt="Logo de la tienda en color blanco" />
        <p>Envío gratuito por compras superiores a 60 €</p>
        <p>Entregas en 24/48 horas</p>
        <p>Gastos de envío 4,00 €</p>
      </div>
    </footer>
  );
};

export default Footer;
