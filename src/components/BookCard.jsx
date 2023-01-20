import { Link } from 'react-router-dom';


export default function BookCard({ bookId, bookCover, bookTitle, bookEdition, bookSeries, bookSequence }) {

    return (
        <Link to={`/books/${bookId}`}>
            <img 
                alt={`${bookTitle}`}
                src={require(`../images/full/${bookCover}.jpg`)}
            />
            <h2>{bookTitle}</h2>
            <p>{bookEdition}</p>
            <h3>{bookSeries}</h3>
            <p>{bookSequence}</p>
        </Link>
    )

};