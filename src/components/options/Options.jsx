import styles from './Options.module.css'

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}> 
      <button className={styles.button} type='button' onClick={() => updateFeedback('good')}>Good</button>
      <button className={styles.button} type='button' onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={styles.button} type='button' onClick={() => updateFeedback('bad')}>Bad</button>
       {totalFeedback > 0 && (
        <button className={styles.button} type='reset' onClick={resetFeedback}>Reset</button>
      )}   

    </div>
  );
};

export default Options;
