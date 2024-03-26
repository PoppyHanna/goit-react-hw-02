// import React from 'react';

// const Feedback = ({ feedbackTypes }) => {
//   return (
//     <div>
//       <ul>
//         {Object.keys(feedbackTypes).map(type => (
//           <li key={type}>
//             {type}: {feedbackTypes[type]}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Feedback;

const Feedback = ({ feedbackTypes, totalFeedback, positivePercentage }) => {
  return (
    <div>
        <ul>
        {Object.keys(feedbackTypes).map(type => (
          <li key={type}>
            {type}: {feedbackTypes[type]}
          </li>
        ))}
        </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;