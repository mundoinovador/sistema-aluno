import "./styles.scss";
import FormAuth from "../../components/FormAuth";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signIn } from "../../utils/helppers";
import AlertMessagem from "../../components/AlertMessage";

function Login() {
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [animationCard, setAnimationCard] = useState("");
  const [titleAlert, setTitleAlert] = useState("Login ok");
  const [descAlert, setDescAlert] = useState(
    "Acesse todo conteúdo preparado para você"
  );

  function addAnimation() {
    if (!animationCard) {
      setAnimationCard("card-on-animation");

      setTimeout(() => {
        setAnimationCard("");
      }, 3000);
    } else {
      return;
    }
  }

  return (
    <div className="home">
      <div className="banner-login-container">
        <h2>SchoolTech</h2>

        <p>Seus estudos organizados em apenas um lugar.</p>
      </div>

      <div className="form-login-container">
        <h2>Login do aluno</h2>
        <FormAuth>
          <input
            required
            type="email"
            placeholder="Digite seu email"
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Digite sua senha"
            value={passwordText}
            onChange={(e) => setPasswordText(e.target.value)}
          />
          <div className="nav-login">
            <Link to={"/register"}>Criar uma conta</Link>
            <Link to={"/recovery"}>Esqueceu a senha?</Link>
          </div>
          <input
            type="submit"
            value="Acessar"
            onClick={async (e) => {
              e.preventDefault();
              try {
                const signInStatus = await signIn(emailText, passwordText);
                console.log(signInStatus);

                if (signInStatus) {
                  setTitleAlert("Login ok");
                  setDescAlert("Acesse todo conteúdo preparado para você");
                  addAnimation();
                } else {
                  setPasswordText("");
                  setTitleAlert("Login inválido");
                  setDescAlert("Seus dados estão incorretos, tente novamente!");
                  addAnimation();
                }
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </FormAuth>

        <AlertMessagem
          animationConfirm={animationCard}
          titleAlert={titleAlert}
          descAlert={descAlert}
        />
      </div>
    </div>
  );
}

export default Login;
