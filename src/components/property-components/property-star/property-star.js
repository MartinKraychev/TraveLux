import styles from './property-star.module.css';

export const StarRating = ({ rating }) => {
    const renderStarRating = () => {
        const fullStars = Math.floor(rating);
        const decimalPart = rating % 1;

        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={i} className="fas fa-star"></i>);
        }

        if (decimalPart >= 0.25 && decimalPart <= 0.75) {
            stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
        } else if (decimalPart > 0.75) {
            stars.push(<i key="full" className="fas fa-star"></i>);
        }

        const remainingStars = 5 - stars.length;

        for (let i = 0; i < remainingStars; i++) {
            stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
        }

        return stars;
    };

    return <div>
        {renderStarRating()}
        <p className={styles['centered']}>{rating}/5</p>
    </div>;
};
