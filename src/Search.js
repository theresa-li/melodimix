import React from 'react';

function Search() {
  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  const handleSubmit = () => {
    console.log(document.getElementById('query').value);
  };

  return (
    <div className='Search'>
      <input id='query' type='text' onKeyPress={handleKeyPress} />
      <button className='searchVideo' type='button' onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default Search;
