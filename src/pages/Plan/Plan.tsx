import Card from './Card/Card';
import styles from './Plan.module.scss';

interface IPlan {
    title: string;
    content: string;
    price: string;
}

const planes: IPlan[] = [
    {
        title: 'GRID',
        content: 'Grid Implicit Responsive',
        price: '$30/mes',
    },
    {
        title: 'FLEXBOX',
        content: 'Flexbox Layout Responsive',
        price: 'Free',
    },
    {
        title: 'ANIMACIONES',
        content: 'Animation Transition Render Website',
        price: '$40/mes',
    },
];

const Plan = () => {
    return (
        <section className={styles.container} id="blog">
            <h3>Obten el plan perfecto para aprender</h3>
            <div className={styles.plan_container}>
                {planes.map((plan, index) => (
                    <Card
                        key={index}
                        type={plan.title}
                        title={plan.price}
                        content={plan.content}
                    />
                ))}
            </div>
        </section>
    );
};

export default Plan;