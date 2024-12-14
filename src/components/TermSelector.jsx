import React from 'react';

const TermSelector = ({ setSelectedTerm }) => {
  return (
    <div className="btn-group">
      {['Fall', 'Winter', 'Spring'].map(term => (
        <button
          key={term}
          className="btn btn-outline-primary"
          onClick={() => setSelectedTerm(term)}
        >
          {term}
        </button>
      ))}
    </div>
  );
};

export default TermSelector;
