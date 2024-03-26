import { useState, useEffect } from 'react';
import './App.css';
import descriptions from './components/descriptions.json';
import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Options from './components/options/Options';
import Notification from './components/notification/Notification';

export default function App() {

   const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
   });
  
    useEffect(() => {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (storedFeedback) {
      setFeedbackTypes(storedFeedback);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
};
  
    const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  
  const positivePercentage = totalFeedback > 0 ? Math.round((feedbackTypes.good / totalFeedback) * 100) : 0;

  return (
    <>
      <Description
        title={descriptions.title}
        text={descriptions.text}
        
      />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
         />
      ) : (
        <Notification message="No feedback collected yet." />
      )}
    </>
  );
}
