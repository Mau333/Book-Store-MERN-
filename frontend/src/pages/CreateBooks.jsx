import React from "react";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

function CreateBooks() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar}=useSnackbar();

  const handleBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };

    setLoading(true);

    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book created successfully...');
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar('error',{variant:'error'});
        console.log("An error occured");
      });
  };

  return (
    <div className="p-4">
      <BackButton/>
      {loading ? (<Spinner/>):''}
      <h1 className="text-2xl my-4 font-extrabold ml-[670px] pb-2">CREATE BOOK</h1>
      <div className=" flex flex-col p-8 w-[600px] border-4 rounded-lg border-blue-950 bg-green-200 mx-auto">
        <div className="my-4">
          <label className="mr-4 text-xl text-gray-900 font-semibold">TITLE  </label>
          <input
            type="text"
            value={title}
            placeholder="Enter title of the book"
            onChange={(e)=>(setTitle(e.target.value))}
            className="w-full py-3 px-3 text-gray-900 border-gray-500 outline-none border rounded-md"
          />

        </div>

        <div className="my-4">
          <label className="mr-4 text-xl text-gray-900 font-semibold">AUTHOR  </label>
          <input
            type="text"
            value={author}
            placeholder="Enter author name"
            onChange={(e)=>(setAuthor(e.target.value))}
            className="w-full py-3 px-3 text-gray-900 border-gray-500 outline-none border rounded-md"
          />

        </div>


        <div className="my-4">
          <label className="mr-4 text-xl text-gray-900 font-semibold">PUBLISH YEAR  </label>
          <input
            type="text"
            value={publishYear}
            placeholder="Enter year of publish"
            onChange={(e)=>(setPublishYear(e.target.value))}
            className="w-full py-3 px-3 text-gray-900 border-gray-500 outline-none border rounded-md"
          />

        </div>
        <button 
        className="bg-green-800 text-xl py-3 px-3 my-8 border border-green-950 rounded-lg"
        onClick={handleBook}
        >
          SAVE
        </button>

      </div>

    </div>
  )
}

export default CreateBooks;
