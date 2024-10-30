import SingleBookcard from "./SingleBookcard";

function BookCard({ books }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
      {books.map((item) => (
        <SingleBookcard key={item._id} book={item} />
      ))}
    </div>
  );
}

export default BookCard;
