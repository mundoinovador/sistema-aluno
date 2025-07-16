import Header from "../../components/Header";
import "./CourseDetail.scss";

function CourseDetail() {
  return (
    <div className="course-detail">
      <Header />

      <div className="detail-container">
        <div className="detail-img-banner">
          <h1>Titulo do curso</h1>
          <p>
            Descrição rápido de até 2 paragrafos sobre o curso, aqui você pode
            ser mais breve.
          </p>
        </div>

        <div className="detail-content">
          <div className="text-content">
            <div className="resume-course">
              <h3>Descrição:</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                incidunt illum laboriosam velit enim aspernatur sunt voluptatum
                voluptas maiores illo tempore soluta alias, aperiam iste quia
                quisquam? Iure, nulla perferendis.
              </p>
            </div>

            <div className="carga-horaria-container">
              <p>Duração</p>
              <p>Certificado</p>
              <p>Tema</p>
            </div>
          </div>

          <div className="button-resume-container">
            <button>Começar agora</button>
            <button>Lembrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
