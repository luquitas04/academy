import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface IModalItem {
    question: string;
    answer: string;
}

interface IModalProps {
    items: IModalItem[];
}

const Modal: React.FC<IModalProps> = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.modal}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.modalItem} ${activeIndex === index ? styles.active : ''}`}
                >
                    <div className={styles.modalHeader} onClick={() => handleToggle(index)}>
                        <h3>{item.question}</h3>
                        <span className={styles.icon}>
                            {activeIndex === index ? '▲' : '▼'}
                        </span>
                    </div>
                    <div className={styles.modalContent}>
                        {activeIndex === index && <p>{item.answer}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Modal;
