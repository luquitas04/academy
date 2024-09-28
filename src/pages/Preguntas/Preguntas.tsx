import Modal from './Modal/Modal';
import Button from '../../components/button/Button';

import styles from './Preguntas.module.scss';

const items = [
    {
        question: '¿Qué es CSS?',
        answer: 'CSS es un lenguaje que describe el estilo visual de un documento HTML.'
    },
    {
        question: '¿Qué aprenderé en este curso?',
        answer: 'Aprenderás los fundamentos de CSS, incluyendo selectores, propiedades, y diseño de layout con Flexbox y CSS Grid.'
    },
    {
        question: '¿Qué es CSS Grid?',
        answer: 'CSS Grid es un sistema de diseño 2D que te permite crear layouts complejos utilizando filas y columnas.'
    }
];

const Preguntas = () => {
    return (
        <section className={styles.container}>
            <h3>Preguntas frecuentes</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, porro doloribus neque perspiciatis sapiente fuga.</p>
            <div className={styles.preguntas}>
                <Modal items={items} />
            </div>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                marginTop: '40px',
            }}>
                <h3>¿Estas listo para aprender CSS?</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ratione architecto magnam, officiis ex porro vero est voluptates quaerat quibusdam illo veniam reprehenderit eius atque tempora iure ab non autem.</p>
                <Button text='Aprende ahora' className={styles.btn} />
            </div>
        </section>
    )
}

export default Preguntas;