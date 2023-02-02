import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

  let closeUps;
  let year;
  if (!isLoading) {
    if (data.art[0].close_ups) {
      closeUps = data.art[0].close_ups.split(",");
    }
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
            <img
              alt={data.art[0].alt_text}
              className={data.art[0].shape}
              src={require(`../images/full/${data.art[0].stock_id}.jpg`)}
            />
          </div>

          <div className="art__info">
            {!data.art[0].close_ups ? (
              <></>
            ) : (
              <div className="art__close_ups">
                <ul className="gallery">
                  {closeUps.map((closeUp) => {
                    return (
                      <button>
                        <li className="art__close_up">
                          <img
                            alt={`${closeUp}-preview`}
                            src={require(`../images/preview/${closeUp}.jpg`)}
                          />
                        </li>
                      </button>
                    );
                  })}
                  <Link to={`/art/${art_id}`}>
                    <li className="art__close_up" key={art_id}>
                      <img
                        alt={`${art_id}-preview`}
                        src={require(`../images/preview/${data.art[0].stock_id}.jpg`)}
                      />
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <p>Made from: {data.art[0].made_from}</p>
            <p>Series: {data.art[0].series_name}</p>
            {data.art[0].price === -1 ? <></> : <p>Price: £{data.art[0].price}</p>}
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
              <p className="art__quote">
                "{data.art[0].quote}"
              </p>
              <p className="art__quote_source">
                {data.art[0].book_title}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// export default function ArtParams() {
//   let { art_id } = useParams();
//   let extraStockId;
//   let extraId;

//   if (art_id.length > 3) {
//     const splitArray = art_id.split("-");
//     art_id = splitArray[0];
//     extraStockId = splitArray[1];
//   }
//   if (customPics.hasOwnProperty(extraStockId)) {
//     extraId = customPics[extraStockId]
//   }

//   return (
//     <ArtSingle
//       art_id={art_id}
//       stockExtra={extraStockId}
//       idExtra={extraId}
//     />
//   )
// }
