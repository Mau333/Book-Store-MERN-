import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle,BiShow} from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";
import { useState } from "react";
import ShowBook from "../../pages/ShowBook";

function SingleBookcard({ book }) {

    const [show,setShow]=useState(false);
  return (
    <div className="p-4 border-2 border-blue-950 m-3 rounded-lg hover:shadow-xl relative">
      <h2 className="absolute top-1 right-2 px-4 py-2 rounded-lg bg-red-300 mt-2">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-800 ">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-2xl" />
        <h2 className="p-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-2xl" />
        <h2 className="p-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-4 my-2 p-4">
        <BiShow className="text-gray-500 h-[41.6px] w-[41.6px] text-xl cursor-pointer border border-black rounded-lg p-2 "
        onClick={()=>(setShow(true))}/>
        <Link to={`/books/details/${book._id}`} className="border border-black rounded-lg p-2 ">
          <BsInfoCircle className="text-2xl text-green-700 cursor-pointer" />
        </Link>
        {/* Correct the route for editing the book */}
        <Link to={`/books/edit/${book._id}`}
        className="border border-black rounded-lg p-2 ">
          <AiOutlineEdit className="text-2xl text-yellow-700 cursor-pointer" />
        </Link>
        {/* Correct the route for deleting the book */}
        <Link to={`/books/delete/${book._id}`}
        className="border border-black rounded-lg p-2 ">
          <MdOutlineDelete className="text-2xl text-red-700 cursor-pointer" />
        </Link>
      </div>

      {
        show &&(
            <BookModal book={book} onClose={()=>{setShow(false)}}/> 
        )
      }
    </div>
  );
}

export default SingleBookcard;
