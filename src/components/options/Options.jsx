// import React from 'react';

// const Options = ({ handleFeedback }) => {
//   return (
//     <div>
//       <h2>Options</h2>
//       <button onClick={() => handleFeedback('good')}>Good</button>
//       <button onClick={() => handleFeedback('neutral')}>Neutral</button>
//       <button onClick={() => handleFeedback('bad')}>Bad</button>
//     </div>
//   );
// };

// export default Options;

// const Options = ({ updateFeedback, totalFeedback, resetFeedback}) => {
//   return (
//     <div>
//       {totalFeedback > 0 && (
//         <button onClick={resetFeedback}>Reset</button>
//       )}
//       <button onClick={() => updateFeedback('good')}>Good</button>
//       <button onClick={() => updateFeedback('neutral')}>Neutral</button>
//       <button onClick={() => updateFeedback('bad')}>Bad</button>
//     </div>
//   );
// };

// export default Options;




const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
          
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
       {totalFeedback > 0 && (
        <button onClick={resetFeedback}>Reset</button>
      )}   

    </div>
  );
};

export default Options;
