import { useState, useEffect, useRef } from 'react';
import styles from './Carrusell.module.scss';

interface IProps {
    image: string;
    title: string;
    studi: string;
    description: string;
}

const estudiantes: IProps[] = [
    {
        image: 'src/assets/img/face.jpg',
        title: 'Mi nombre es Jordan Alexander',
        studi: 'Estudiante de CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam id dui consectetur consectetur.',
    },
    {
        image: 'src/assets/img/images.jpeg',
        title: 'Mi nombre es Sofia Martinez',
        studi: 'Estudiante de CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam id dui consectetur consectetur.',
    },
    {
        image: 'src/assets/img/juan.jpeg',
        title: 'Mi nombre es Luis Alberto',
        studi: 'Estudiante de CSS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel quam id dui consectetur consectetur.',
    },
];

const Carrusell = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const trackRef = useRef<HTMLDivElement>(null);

    const totalItems = estudiantes.length;

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    useEffect(() => {
        if (!isAnimating) return;

        let transitionTimeout: ReturnType<typeof setTimeout>;

        if (trackRef.current) {
            trackRef.current.style.transition = 'transform 0.5s ease-in-out';
            trackRef.current.style.transform = `translateX(${-currentIndex * 100}%)`;
        }

        transitionTimeout = setTimeout(() => {
            setIsAnimating(false);
            if (currentIndex === 0) {
                setCurrentIndex(totalItems);
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    trackRef.current.style.transform = `translateX(${-totalItems * 100}%)`;
                }
            } else if (currentIndex === totalItems + 1) {
                setCurrentIndex(1);
                if (trackRef.current) {
                    trackRef.current.style.transition = 'none';
                    trackRef.current.style.transform = `translateX(-100%)`;
                }
            }
        }, 500);

        return () => clearTimeout(transitionTimeout);
    }, [currentIndex, totalItems, isAnimating]);

    return (
        <section className={styles.container} id='blog'>
            <button onClick={handlePrev} className={styles.prev}>
                <img src="src/assets/icons/leftarrow.svg" alt="" />
            </button>
            <div className={styles.carousel}>
                <div
                    className={styles.carousel_track}
                    ref={trackRef}
                    style={{ transform: `translateX(${-currentIndex * 100}%)`, transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none' }}
                >
                    <div className={styles.carousel_item}>
                        <img src={estudiantes[totalItems - 1].image} alt={estudiantes[totalItems - 1].title} className={styles.image} />
                        <div className={styles.text}>
                            <h3>{estudiantes[totalItems - 1].title}</h3>
                            <span>{estudiantes[totalItems - 1].studi}</span>
                            <p>{estudiantes[totalItems - 1].description}</p>
                        </div>
                    </div>

                    {estudiantes.map((estudiante, index) => (
                        <div key={index} className={styles.carousel_item}>
                            <img
                                src={estudiante.image}
                                alt={estudiante.title}
                                className={styles.image}
                            />
                            <div className={styles.text}>
                                <h3>{estudiante.title}</h3>
                                <span>{estudiante.studi}</span>
                                <p>{estudiante.description}</p>
                            </div>
                        </div>
                    ))}

                    <div className={styles.carousel_item}>
                        <img src={estudiantes[0].image} alt={estudiantes[0].title} className={styles.image} />
                        <div className={styles.text}>
                            <h3>{estudiantes[0].title}</h3>
                            <span>{estudiantes[0].studi}</span>
                            <p>{estudiantes[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleNext} className={styles.next}>
                <img src="src/assets/icons/rightarrow.svg" alt="" />
            </button>
        </section>
    );
};

export default Carrusell;
