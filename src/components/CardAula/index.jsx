import "./CardAulas.scss";

function CardAula(props) {
  const ImgCard = props.imagemCurso;
  return (
    <div className="card-aulas">
      <img src={ImgCard} />

      <div className="desc-curso-card-content">
        <h3>{props.tituloCurso}</h3>
        <p>{props.descCurso}</p>
      </div>
    </div>
  );
}

export { CardAula };
