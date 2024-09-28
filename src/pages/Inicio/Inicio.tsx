import Button from '../../components/button/Button';
import styles from './Inicio.module.scss';

const Inicio = () => {
    
  return (
    <div id='inicio' className={styles.container}>
        <div className={styles.container_image}>
            <img src="" alt="" className={styles.image}/>
        </div>
        <div className={styles.container_text}>
            <h1> Aprende CSS3 desde CERO hasta dominarlo. </h1>
            <span>Elige aprender CSS de una vez por todas, una vez que termines este curso serás capaz de crear cualquier layout con CSS y crear tus propias animaciones.</span>
            <Button text='Comienza ahora' className={styles.btn}/>
        </div>
    </div>
  )
}

export default Inicio;