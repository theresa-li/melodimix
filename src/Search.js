import React from 'react';

function Search() {
  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  const handleSubmit = () => {
    const query = document.getElementById('query').value;
    fetch(`http://localhost:3001/api/searchYT/${query}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => console.log('Response!', res));
  };

  return (
    <div className='search'>
      <input id='query' type='text' onKeyPress={handleKeyPress} />
      <button className='searchVideo' type='button' onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default Search;
