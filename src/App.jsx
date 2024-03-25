import { useState } from 'react';
import descriptions from './components/descriptions.json';
import Description from './components/description/Description';
import Feedback from './components/feedback/Feedback';
import Options from './components/options/Options';

export default function App() {
   const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };
  return (
    <>
      <Description
        title={descriptions.title}
        text={descriptions.text}
      />

      <Options updateFeedback={updateFeedback}/>
      
      <Feedback feedbackTypes={feedbackTypes}/>
    </>
  );
}
