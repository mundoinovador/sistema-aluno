import { useState } from "react";
import CardProduto from "../../components/CardProduto";
import Header from "../../components/Header";
import "./styles.scss";

function Home() {
  const [produtos, setProdutos] = useState([
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
    {
      nome: "Fundamentos Python",
      desc: "Aqui você aprenderá os fundamentos do Python, tudo que é necessário para iniciar na liniguagem",

      key: 1,
    },
  ]);

  return (
    <div className="home">
      <Header headerHome />
      <div className="desc-home-container">
        <h2>Encontre oque precisa</h2>
        <p>
          Descubra os conteúdos disponiveis pela nossa plataforma, uma lista de
          cursos que se atualiza a cada trimestre.
        </p>
      </div>

      <form>
        <input type="text" placeholder="Busque aqui" />
        <input type="submit" value="Buscar" />
      </form>

      <div className="cursos-container">
        {produtos.map((item, index) => (
          <CardProduto key={index} nome={item.nome} desc={item.desc} />
        ))}
      </div>
    </div>
  );
}

export default Home;
