import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArtSingle } from "../api";
const { formatDate } = require("../utils.js");

export default function ArtSingle() {
  const { art_id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArtSingle(art_id).then((book) => {
      setData(book);
      setIsLoading(false);
    });
  }, [art_id]);
  console.log(data.art);
  let year;
  if (!isLoading) {
    const releaseDate = formatDate(data.art.completion);
    year = releaseDate.slice(-4);
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{data.art.art_title}</h2>
          <p>{year}</p>
          <img
            alt={data.art.alt_text}
            className="centre"
            src={require(`../images/full/${data.art.stock_id}.jpg`)}
          />
          <p>Series: {data.art.series_name}</p>
          <p>Made from: {data.art.made_from}</p>
          {data.art.price === -1 ? <></> : <p>£{data.art.price}</p>}
          <p>{data.art.quote}</p>
          <p>{data.art.book_title}</p>
          {data.art.self_ref === "TBC" ? (
            <></>
          ) : (
            <p>See also <Link to={`/art/${data.art.self_ref}`}>{data.art.self_ref}</Link></p>
          )}
        </>
      )}
    </main>
  );
}
