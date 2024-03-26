import styles from "./Feedback.module.css";

const Feedback = ({ feedbackTypes, totalFeedback, positivePercentage }) => {
  return (
    <div className={styles.feedback}>
        <ul className={styles.list}>
        {Object.keys(feedbackTypes).map(type => (
          <li key={type} >
            {type}: {feedbackTypes[type]}
          </li>
        ))}
        </ul>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;