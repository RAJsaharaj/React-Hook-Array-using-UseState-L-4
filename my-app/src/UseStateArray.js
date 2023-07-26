import React, { useState } from 'react'

const UseStateArray = () => {
  
  const bioData = [
    {
      id: 0,
      myName: "Raju",
      age: 26,
    },
    {
      id: 1,
      myName: "Amit",
      age: 20,
    },
  ];

  const [myArray, setmyArray] = useState(bioData); 

  const clearArray = () => {
         setmyArray([]);
  }
  
  return (
    <>
      {
        myArray.map((curElm) => {
          return <h1 className='User'> Name: {curElm.myName} & Age: {curElm.age} </h1>
        })
      }
      <button className='btn' onClick={clearArray}>Clear</button>
    </>
    
  )
}

export default UseStateArray