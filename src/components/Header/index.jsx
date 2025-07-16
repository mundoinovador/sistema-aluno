import "./Header.scss";
import SinoIcon from "../../assets/icons/notification.png";
import PerfilIcon from "../../assets/icons/profile.png";
import { useState } from "react";

function Header(props) {
  const [itemNavSelected, setItemNavSelected] = useState([false, true, false]);
  return (
    <header>
      <a href="/home">
        <h2>SchoolTech</h2>
      </a>

      {props.headerHome ? (
        <nav>
          <a href="/home">Trilhas</a>
          <a href="/salvos">Salvos</a>
          <a href="#">Certificado</a>

          <div className="icons-header-container">
            <img src={SinoIcon} alt="Sininho de notificação" />
            <img
              src={PerfilIcon}
              alt="Icone de perfil que leva para a página do seu perfil"
            />
          </div>
        </nav>
      ) : (
        <nav>
          <a href="/home">Trilhas</a>
          <a href="/detail">Detalhes</a>
          <a href="/aulas-gravadas">Video aulas</a>
          <a href="#">Baixar PDF</a>
        </nav>
      )}
    </header>
  );
}

export default Header;
