import PropTypes from 'prop-types'; // Імпортуємо PropTypes
import styles from './Description.module.css'
import { IoIosCafe } from "react-icons/io";


const Description = ({ title, text }) => {
    return (
        <div className={styles.description}>
            <h1 className={styles.title}>{title}
                <span className={styles.iconContainer}>
                    <IoIosCafe className={styles.icon} />
                </span>
            </h1>
            <p className={styles.text}>{text}</p>
        </div>
    )
}
Description.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Description;