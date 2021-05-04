import React from 'react';

const UserItem = ({ cases: { state, cases, deaths, recovered, active } }) => {
  return (
    <div className='card text-center'>
      <h1>{state}</h1>
      <ul>
        <li> Total Cases: {cases}</li>
        <li> Total Death: {deaths}</li>
        <li> Total Recovered: {recovered} </li>
        <li> Current Amount of cases {active}</li>
      </ul>
    </div>
  );
};

export default UserItem;
