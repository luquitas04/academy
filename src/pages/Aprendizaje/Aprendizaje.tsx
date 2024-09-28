import styles from './Aprendizaje.module.scss';
import Card from './Card/Card';

interface LearningCard {
    icon: string;
    title: string;
    text: string;
}

const learningCards: LearningCard[] = [
    {
        icon: '/assets/icons/shapes.svg',
        title: 'CSS Layouts',
        text: 'Aprenderás cómo crear diseños responsivos con CSS utilizando Grid y Flexbox de manera eficiente.',
    },
    {
        icon: '/assets/icons/paint.svg',
        title: 'Animaciones',
        text: 'Dominarás las animaciones con CSS, incluyendo transiciones, keyframes y efectos visuales llamativos.',
    },
    {
        icon: '/assets/icons/code.svg',
        title: 'Sass',
        text: 'Escribirás CSS de manera más organizada y escalable utilizando Sass.',
    },
];

const Aprendizaje = () => {
    return (
        <div className={styles.container} id="about">
            <h3>¿Qué aprenderás en este curso?</h3>
            <span>
                Todo lo necesario y obligatorio de CSS, (Flexbox, Grid, Custom properties, Position, Animaciones, Box Model y más)
            </span>
            <section className={styles.cardsContainer}>
                {learningCards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </section>
        </div>
    );
};

export default Aprendizaje;