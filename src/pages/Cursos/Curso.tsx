import Button from '../../components/button/Button';
import styles from './Cursos.module.scss';

const Curso = () => {
    return (
        <section className={styles.container} id='contacto'>
            <div className={styles.figura}>
                <img src="/assets/img/macbook.png" />
            </div>
            <div className={styles.text}>
                <h3>Curso completo de CSS3. ¡Domina CSS de una vez por todas!</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, aliquam nemo in facere suscipit at delectus unde labore ad officia iste accusantium eaque aperiam laborum est voluptate totam? Modi, obcaecati?</p>
                <Button text='Entre al curso' className={styles.btn} />
            </div>
            
        </section>
    )
}

export default Curso;