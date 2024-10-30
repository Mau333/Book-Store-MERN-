// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBooks from "./pages/CreateBooks.jsx";
import Home from "./pages/Home.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { Navigate } from "react-router-dom";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        {/* Redirect '/' to '/books' if desired */}
        <Route path="/" element={<Navigate to="/books" replace />} />
        {/* Define /books route */}
        <Route path="/books" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        {/* Optional: Add a catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/books" replace />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
