import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import { fetchBookSingle } from "../api";
const { formatDate } = require("../utils.js");

export default function BookSingle() {
  const { book_id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookSingle(book_id).then((book) => {
      setData(book);
      setIsLoading(false);
    });
  }, [book_id]);
  console.log(data.book);

  let releaseDate;

  if (!isLoading) {
    releaseDate = formatDate(data.book.release_date);
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{data.book.book_title}</h2>
          {data.book.edition_no !== 1 ? (
            <p>(Edit {data.book.edition_no})</p>
          ) : (
            <></>
          )}
          <>
            {data.book.series_name} {data.book.sequence_no}
          </>
          <p>Release date: {releaseDate}</p>
          <ExternalLink href={data.book.sales_url}>
            <img
              alt={`${data.book.book_title} - preview`}
              className="centre"
              src={require(`../images/full/${data.book.cover_stock_id}.jpg`)}
            />
          </ExternalLink>
          <ul className="book_blurb">
            {data.book.blurb.map((blurbParagraph) => {
              const blurbKey = blurbParagraph.slice(0,14);
              return (
                <li key ={blurbKey}>{blurbParagraph}</li>
              );
            })}
          </ul>
          <ExternalLink href={data.book.sales_url}>
            <p className="book_info">Buy Here</p>
          </ExternalLink>
        </>
      )}
    </main>
  );
}
