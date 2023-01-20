import { useEffect, useState } from "react";
import { fetchBooks } from "../api";
import BookCard from "./BookCard";

export default function Books() {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBooks().then((books) => {
      setBookData(books);
      setIsLoading(false);
    });
  }, []);

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <ul id="Books">
            {bookData.books.map((book) => {
              return (
                <BookCard 
                    key={book.book_id}
                    bookId={book.book_id}
                    bookCover={book.cover_stock_id}
                    bookTitle={book.book_title}
                    bookEdition={book.edition_no}
                    bookSeries={book.series_name}
                    bookSequence={book.sequence_no}
                />
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
}
