import { Link } from "react-router-dom";

export default function BookCard({
  bookId,
  bookCover,
  bookTitle,
  bookEdition,
  bookSeries,
  bookSequence,
}) {
  return (
    <Link to={`/books/${bookId}`}>
      <li className="galleryItem bookPreview" key={bookId}>
        <div className="gallery_pic">
          <img 
            alt={`${bookTitle}`}
            className="centre"
            src={require(`../images/full/${bookCover}.jpg`)}
          />
        </div>
        <h2>{bookTitle}</h2>
        {bookEdition !== 1 ? (
          <p>(Edition {bookEdition})</p>
        ) : (
          <></>
        )}
        <h4>{bookSeries} ({bookSequence})</h4>
      </li>
    </Link>
  );
}
