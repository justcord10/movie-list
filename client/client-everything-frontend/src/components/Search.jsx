import React from 'react';

//need a button component and an input field!
const Search = ({searchHandleClick}) => {
  //states
  const [inputText, setInputText] = React.useState('');

  //event handler for typing into the search bar
  const handleChange = (e) => {
    setInputText(e.target.value);
    //console.log(e.target.value);
  };

  return (
    <div className='Search'>
      <input className='input' placeholder='Search...' onChange={(e)=>{handleChange(e)}}></input>
      <button className='search-button' onClick={()=>{searchHandleClick(inputText)}}>Go!</button>
    </div>
  );
}

export default Search;