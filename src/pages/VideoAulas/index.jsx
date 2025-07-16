import { CardAula } from "../../components/CardAula";
import Header from "../../components/Header";
import "./VideoAulas.scss";

function VideoAulas() {
  return (
    <div className="video-aulas">
      <Header />

      <main>
        <div className="resumo-aulas">
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_intro/thumb.png"
            tituloCurso="React - 1 | Introdução"
            descCurso="Prepare o ambiente e entenda como funciona o react, como fazer as configurações iniciais e etc."
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_components_2365/thumb.png"
            tituloCurso="React - 2 | Components"
            descCurso="Conheça os fundamentos para aprender a lidar com components no react"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
          <CardAula
            imagemCurso="https://www.devmedia.com.br/arquivos/cursos/react_rotas_%202370/new/thumb.png"
            tituloCurso="React - 3 | Navegação entre páginas"
            descCurso="Aprenda a criar multiplas páginas e navegar com rotas e eventos"
          />
        </div>
        <div className="aula-container">
          <iframe
            height="315"
            src="https://www.youtube.com/embed/e6FigV2fLC8?si=_zHs7zRRl8ZOyoKX"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="informativo-video-aula">
            <h2>React - 3 | Navegação entre páginas</h2>
            <button>Próximo</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default VideoAulas;
