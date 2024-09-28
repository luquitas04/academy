import Button from '../../../components/button/Button';
import styles from './Card.module.scss';

const Card = ({ type, title, content }: { type: string, title: string, content: string }) => {
    return (
        <div className={styles.container}>
            <span>{type}</span>
            <h3>{title}</h3>
            <div>
                {content.split(' ').map((word, index) => (
                    <span key={index}>{word}</span>
                ))}
            </div>
            <Button text='Empieza ahora' className={styles.btn} />
        </div>
    )
}

export default Card;