import "./styles.scss";
import FormAuth from "../../components/FormAuth";
import { createNewUser } from "../../utils/helppers";
import { useState } from "react";
import AlertMessagem from "../../components/AlertMessage";

function Register() {
  const [nameRegister, setNameRegister] = useState("");
  const [emailRegister, setEMailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [confirmPasswordRegister, setConfirmPasswordRegister] = useState("");
  const [animationCard, setAnimationCard] = useState("");
  const [titleAlert, setTitleAlert] = useState("Cadastro criado");
  const [descAlert, setDescAlert] = useState(
    "Seja muito bem-vindo(a), faça login e acesse todo o conteúdo!"
  );

  function addAnimation(pathReturn = "/") {
    if (!animationCard) {
      setAnimationCard("card-on-animation");
      setTimeout(() => {
        setAnimationCard("");
        if (pathReturn == "/login") {
          window.open(pathReturn, "_self");
        }
      }, 3000);
    } else {
      return;
    }
  }

  return (
    <div className="home">
      <div className="banner-register-container">
        <h2>SchoolTech</h2>

        <p>Não perca tempo, inicie sua jornada.</p>
      </div>

      <div className="form-register-container">
        <h2>Cadastro do aluno</h2>
        <FormAuth>
          <input
            required
            type="text"
            placeholder="Digite seu nome"
            value={nameRegister}
            onChange={(e) => {
              setNameRegister(e.target.value);
            }}
          />

          <input
            required
            type="email"
            placeholder="Digite seu email"
            value={emailRegister}
            onChange={(e) => {
              setEMailRegister(e.target.value);
            }}
          />

          <input
            required
            type="password"
            placeholder="Crie sua senha"
            value={passwordRegister}
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
          />

          <input
            required
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPasswordRegister}
            onChange={(e) => {
              setConfirmPasswordRegister(e.target.value);
            }}
          />

          <input
            type="submit"
            value="Acessar"
            onClick={async (e) => {
              e.preventDefault();

              try {
                const statusRegister = await createNewUser(
                  emailRegister,
                  passwordRegister
                );

                if (statusRegister) {
                  setTitleAlert("Cadastro criado");
                  setDescAlert(
                    "Seja muito bem-vindo(a), faça login e acesse todo o conteúdo!"
                  );
                  addAnimation("/login");
                } else {
                  setTitleAlert("Ops!");
                  setDescAlert(
                    "Alguma informação parece inválida, tente novamente"
                  );
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

export default Register;
