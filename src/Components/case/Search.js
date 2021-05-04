import React, { useState } from 'react';

const Search = ({ searchCases, showClear, clearCase, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter The name of a State,', 'light');
    } else {
      searchCases(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} classname='form'>
        <input
          type='text'
          name='text'
          placeholder='Search State... example New York '
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearCase}>
          {' '}
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
