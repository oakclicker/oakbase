import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ value, max }) => {
  const percent = (value / max) * 100;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
