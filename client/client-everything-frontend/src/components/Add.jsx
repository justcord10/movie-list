import React from 'react';

//need a button component and an input field!
const Add = ({addHandleClick}) => {
  //states
  const [addInputText, setAddInputText] = React.useState('');

  //event handler for typing into the Add bar
  const addHandleChange = (e) => {
    setAddInputText(e.target.value);
    console.log(e.target.value);
    //reset text in bar to '' Want to figure out how to do
    //e.target.value = addInputText;

  };

  return (
    <div className='Add'>
      <input className='input' placeholder='Add movie title here' onChange={(e)=>{addHandleChange(e)}}></input>
      <button className='Add-button' onClick={()=>{
        addHandleClick(addInputText);
        }}>Add</button>
    </div>
  );
}

export default Add;