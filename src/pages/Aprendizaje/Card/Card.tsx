import styles from './Card.module.scss';

const Card = ({ icon, title, text }: { icon: string, title: string, text: string }) => {
  return (
    <div className={styles.container}>
      <img src={icon} />
      <h3>{title}</h3>
      <span>{text}</span>
    </div>
  )
}

export default Card;