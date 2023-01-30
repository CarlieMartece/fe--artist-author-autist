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
  let artClass = "landscape";
  if (!isLoading) {
    const releaseDate = formatDate(data.art.completion);
    year = releaseDate.slice(-4);
    if (data.art.shape === "P") {
      artClass = "portrait";
    } else if (data.art.shape === "S") {
        artClass = "square";
    }
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div id="ArtSingle">
          <div className="art__title">
            <h2>{data.art.art_title}</h2>
            <span className="art__year">({year})</span>
          </div>
          <div className="art__pic">
            <img
              alt={data.art.alt_text}
              className={artClass}
              src={require(`../images/full/${data.art.stock_id}.jpg`)}
            />
          </div>

          <div className="art__info">
            <p>Made from: {data.art.made_from}</p>
            <p>Series: {data.art.series_name}</p>
            {data.art.price === -1 ? <></> : <p>Price: £{data.art.price}</p>}
            {data.art.self_ref === "TBC" ? (
              <></>
            ) : (
              <p>
                See also{" "}
                <Link to={`/art/${data.art.self_ref}`}>
                  {data.art.self_ref}
                </Link>
              </p>
            )}
            <div className="art__quote_and_source">
              <p className="art__quote">"{data.art.quote}"</p>
              <p className="art__quote_source">{data.art.book_title}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
