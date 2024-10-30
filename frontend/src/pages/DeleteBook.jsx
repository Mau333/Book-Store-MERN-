import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function DeleteBook() {
  const [book, setBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        console.log("API Response:", res.data); // Debugging line
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the book:", error); // Enhanced error logging
        setError("Failed to load the book details. Please try again later.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("Book deleted successfully...", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("error", { variant: "error" });
        console.log(error);
        //alert("an error occured, check console");
        navigate("/");
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-2xl my-4 font-extrabold">DELETE BOOK</h1>
      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : book ? (
        <div className="w-[600px] text-xl flex flex-col items-center border-2 border-sky-950 rounded-lg p-8 mx-auto">
          <h1>Are you sure to delete this book ? {book.data.title}</h1>
          <button
            className="bg-red-700 font-xl font-bold w-[400px] p-2 text-white border border-black rounded-lg outline-none mt-8"
            onClick={handleDelete}
          >
            DELETE
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DeleteBook;
