import React from 'react'
import { RxArrowLeft } from "react-icons/rx";
import { Link } from 'react-router-dom';


function BackButton({destination='/'}) {
  return (
    <div className='flex'>
        <Link to={destination}
        className='bg-green-200 rounded-md  w-fit text-black px-4 py-4'>
            <RxArrowLeft className='text-2xl'/>
        </Link>
        
    </div>
  )
}

export default BackButton