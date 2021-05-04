import React from 'react';
import CaseItem from './CaseItem';
import Spinner from '../Layout/Spinner';

const Cases = ({ cases, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <div style={caseStyle}>
      {cases.map(cases => (
        <CaseItem key={cases.id} cases={cases} />
      ))}
    </div>
  );
};

const caseStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Cases;
