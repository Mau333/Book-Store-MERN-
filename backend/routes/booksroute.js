import mongoose from "mongoose";
import Book from "../models/bookModel.js";
import express from 'express';

const router = express.Router()

//route for save a new book(post)
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(404).send({
        message: "Send all required fields : title, author, publishYear",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(201).json({
      message: "Book created successfully!",
      book,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//route for get all the books

router.get("/", async (_req, _res) => {
  try {
    const books = await Book.find({});
    return _res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return _res.status(500).send({ message: error.message });
  }
});

//route for get one  book

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the ID from route parameters
    const books = await Book.findById(id);
    return res.status(200).json({
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
});

//route to update a book
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id :", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid ID format" });
    }
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Send all required fields : title, author, publishYear",
      });
    }

    //console.log('PUT request received for ID:', req.params.id);

    const result = await Book.findByIdAndUpdate(id, req.body);
    //console.log(result);

    if (!result) {
      return res.status(404).send({ message: "Book not found" });
    }
    return res
      .status(200)
      .send({ message: "Book updated successfully", data: result });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
});

//delete a book
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).send({ message: "book not found" });
    }

    return res.status(200).send("book deleted successfully");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

export default router;