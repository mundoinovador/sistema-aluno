import "./CardProduto.scss";
import LogoPython from "../../assets/logo-python.png";
import { useNavigate } from "react-router-dom";

function CardProduto(props) {
  const navigate = useNavigate();

  return (
    <div
      className="card-produto"
      onClick={() => {
        navigate("/detail");
      }}
    >
      <img src={LogoPython} />

      <div className="card-content">
        <h2>{props.nome}</h2>
        <p>{props.desc}</p>

        <div className="button-card-course">
          <button
            onClick={() => {
              navigate("/detail");
            }}
          >
            Ver mais
          </button>
          <button>Lembrar</button>
        </div>
      </div>
    </div>
  );
}

export default CardProduto;
