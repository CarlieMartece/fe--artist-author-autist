import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {Img} from 'react-image'
import { fetchArtSingle } from "../api";
const { formatDate } = require("../utils.js");


export default function ArtSingle() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let { art_id } = useParams();

  useEffect(() => {
    fetchArtSingle(art_id).then((art) => {
      setData(art);
      setIsLoading(false);
    });
  }, [art_id]);

  let year = new Date().getFullYear();
  if (!isLoading) {
    const releaseDate = formatDate(data.art[0].completion);
    year = releaseDate.slice(-4);
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div id="ArtSingle">
          <div className="art__title">
            <h2>{data.art[0].art_title}</h2>
            <span className="art__year">({year})</span>
          </div>
          <div className="art__pic">
          <Img
                alt={data.art[0].alt_text}
                className={data.art[0].shape}
                src={[`https://raw.githubusercontent.com/CarlieMartece/fe--artist-author-autist/main/src/images/full/${data.art[0].stock_id}.jpg`, require(`../images/full/404.jpg`)]}
              />
          </div>

          <div className="art__info">
            <p>Made from: {data.art[0].made_from}</p>
            <p>Series: {data.art[0].series_name}</p>
            {data.art[0].price === -1 ? (
              <></>
            ) : (
              <p>Price: £{data.art[0].price}</p>
            )}
            {data.art[0].self_ref === -1 ? (
              <></>
            ) : (
              <p>
                See also{" "}
                <Link to={`/art/${data.art[0].self_ref}`}>
                  {data.art[0].self_ref}
                </Link>
              </p>
            )}
            <div className="art__quote_and_source">
              <p className="art__quote">"{data.art[0].quote}"</p>
              <p className="art__quote_source">{data.art[0].book_title}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
