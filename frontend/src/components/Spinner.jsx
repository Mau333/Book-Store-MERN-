import React from 'react';
import { RiLoader2Fill } from "react-icons/ri";

function Spinner() {
  return (
    <div className='animated-ping w-16 h-16 rounded-full'>
      <RiLoader2Fill className='w-10'/>
    </div>
  )
}

export default Spinner