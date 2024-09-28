import { Link as ScrollLink } from 'react-scroll';
import styles from './Footer.module.scss';
import Button from '../button/Button';

const Footer = () => {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h3>Curso CSS.</h3>
                    <nav className={styles.container_links}>
                        <ScrollLink
                            to="inicio"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={styles.navLink}
                        >
                            Inicio
                        </ScrollLink>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={styles.navLink}
                        >
                            Acerca de
                        </ScrollLink>
                        <ScrollLink
                            to="contacto"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={styles.navLink}
                        >
                            Contacto
                        </ScrollLink>
                        <ScrollLink
                            to="blog"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={styles.navLink}
                        >
                            Blog
                        </ScrollLink>
                    </nav>
                </div>
                <div className={styles.register}>
                    <h3>Suscribete a la newsletter</h3>
                    <div>
                        <input type="text" placeholder='Email' />
                        <Button text='Registrate' className={styles.btn} />
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.container_icons}>
                <div>
                    <img src="src/assets/icons/facebook.svg" className={styles.icon} />
                    <img src="src/assets/icons/twitter.svg" className={styles.icon} />
                    <img src="src/assets/icons/youtube.svg" className={styles.icon} />
                </div>
                <p>Derechos reservados © Lucas López</p>
            </div>
        </div>
    )
}

export default Footer;