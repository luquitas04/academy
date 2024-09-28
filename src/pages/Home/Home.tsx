import Aprendizaje from "../Aprendizaje/Aprendizaje";
import Carrusell from "../Carrousell/Carrusell";
import Curso from "../Cursos/Curso";
import Inicio from "../Inicio/Inicio";
import Plan from "../Plan/Plan";
import Preguntas from "../Preguntas/Preguntas";
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Inicio />
      <Aprendizaje />
      <Curso />
      <Plan />
      <Carrusell />
      <Preguntas />
    </div>
  )
}

export default Home;