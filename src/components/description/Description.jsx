import PropTypes from 'prop-types'; // Імпортуємо PropTypes
import styles from './Description.module.css'


const Description = ({ title, text }) => {
    return (
        <div className={styles.description}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
        </div>
    )
}
Description.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Description;