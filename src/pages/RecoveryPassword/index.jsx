import "./styles.scss";
import FormAuth from "../../components/FormAuth";
import { useState } from "react";
import { resetPassword } from "../../utils/helppers";
import AlertMessagem from "../../components/AlertMessage";

function RecoveryPassword() {
  const [emailReset, setEmailReset] = useState("");
  const [animationCard, setAnimationCard] = useState("");

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
    <div className="recovery-password">
      <div className="banner-recovery-container">
        <h2>SchoolTech</h2>

        <p>Tenha acesso fácil em qualquer lugar do planeta.</p>
      </div>

      <div className="form-recovery-container">
        <h2>Recuperar senha</h2>
        <FormAuth>
          <input
            required
            type="email"
            placeholder="Digite seu email"
            value={emailReset}
            onChange={(e) => setEmailReset(e.target.value)}
          />

          <input
            type="submit"
            value="Acessar"
            onClick={async (e) => {
              e.preventDefault();
              try {
                await resetPassword(emailReset);
                addAnimation();
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </FormAuth>

        <AlertMessagem
          animationConfirm={animationCard}
          titleAlert="E-mail enviado!"
          descAlert="Enviamos um e-mail para redefinir sua senha"
        />
      </div>
    </div>
  );
}

export default RecoveryPassword;
