import "./FormAuth.scss";

function FormAuth(props) {
  return <form className="login-container">{props.children}</form>;
}

export default FormAuth;
