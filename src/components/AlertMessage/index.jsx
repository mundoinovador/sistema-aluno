import "./AlertMessage.scss";

function AlertMessagem(props) {
  return (
    <div className={`alert-message ${props.animationConfirm}`}>
      <h2>{props.titleAlert}</h2>
      <p>{props.descAlert}</p>
    </div>
  );
}

export default AlertMessagem;
