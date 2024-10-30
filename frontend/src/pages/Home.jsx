import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import BookCard from "../components/Home/BookCard";
import BookTable from "../components/Home/BookTable";
import { Link } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <div className="flex justify-center items-center gap-x-4">
          <button
            className="border border-blue-950 bg-blue-500 text-lg text-white rounded-lg w-[80px] py-2 outline-none"
            onClick={() => setType("table")}
          >
            Table
          </button>

          <button
            className="border border-blue-950 bg-blue-500 text-lg text-white rounded-lg w-[80px] py-2 outline-none"
            onClick={() => setType("card")}
          >
            Card
          </button>
        </div>

        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : type === 'table' ? (
        <BookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
}

export default Home;
