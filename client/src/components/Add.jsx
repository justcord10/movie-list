import React from 'react';

//need a button component and an input field!
const Add = ({addHandleClick}) => {
  //states
  const [inputText, setInputText] = React.useState('');

  //event handler for typing into the Add bar
  const handleChange = (e) => {
    setInputText(e.target.value);
    //console.log(e.target.value);
  };

  return (
    <div className='Add'>
      <input className='input' placeholder='Add...' onChange={(e)=>{handleChange(e)}}></input>
      <button className='Add-button' onClick={()=>{addHandleClick(inputText)}}>Go!</button>
    </div>
  );
}

export default Add;