import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

function ShowBook() {
  const [book,setBook]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const {id}=useParams();

  console.log("id",id);
  

  useEffect(()=>{
      setLoading(true);
      axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res)=>{
        console.log("API Response:", res.data); // Debugging line
        setBook(res.data);
        setLoading(false);
      })
      .catch((error)=>{
        console.error("Error fetching the book:", error); // Enhanced error logging
        setError("Failed to load the book details. Please try again later.");
        setLoading(false);
        
      });
  },[id]);
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4 content-center text-center w-fit ml-52 font-extrabold'>BOOK DETAILS</h1>
      {loading ? (
        <Spinner/>
      ):
      error?
      (
        <div className="text-red-500">{error}</div>
      ) :
      book?
      (
        <div className='flex flex-col border-4 rounded-lg border-sky-900 p-8 w-fit bg-green-200  '>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>ID :</span>
            <span className='text-black text-xl font-bold'>{book.data._id}</span>

          </div>

          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>TITLE :</span>
            <span className='text-black text-xl font-bold'>{book.data.title}</span>

          </div>

          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>AUTHOR :</span>
            <span className='text-black text-xl font-bold'> {book.data.author}</span>

          </div>

          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>PUBLISHING YEAR :</span>
            <span className='text-black text-xl font-bold'>{book.data.publishYear}</span>
          </div>

          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>CREATE TIME :</span>
            <span className='text-black text-xl font-bold'>{new Date(book.data.createdAt).toString().slice(0,33)}</span>
          </div>


          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-800'>LAST UPDATE TIME :</span>
            <span className='text-black text-xl font-bold'>{new Date(book.data.updatedAt).toString().slice(0,33)}</span>
          </div>

        </div>

      )
      :(
        <div className="text-gray-500">Book not found.</div>
      )
      }
    </div>
  )
}

export default ShowBook