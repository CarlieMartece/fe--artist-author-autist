import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchArtSingle } from "../api";
const { formatDate } = require("../utils.js");
const customPics = require("../customPics");

export default function ArtParams() {
  let { art_id } = useParams();
  let closeUpId;

  if (art_id.length > 3) {
    const splitArray = art_id.split("-");
    art_id = splitArray[0];
    closeUpId = splitArray[1];
  }
  console.log(art_id);
  console.log(closeUpId);

  return (
    <ArtSingle 
      idMain={art_id}
      idExtra={closeUpId}
    />
  )  
}


const ArtSingle = ({ idMain, idExtra }) => {
  const [data, setData] = useState([]);
  const [extra, setExtra] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArtSingle(idMain)
      .then((art) => {
        setData(art);
      })
      .then(() => {
        if (idExtra && customPics.hasOwnProperty(idExtra)) {
            fetchArtSingle(customPics[idExtra]).then((artExtra) => {
            //console.log(artExtra)
            setExtra(artExtra);
            setIsLoading(false);
          });
        } else {
          setExtra(undefined);
          setIsLoading(false);
        }
      });
  }, [idMain]);
  //console.log(data.art);
  //console.log(extra.art);

  let closeUps;
  let mainPic;
  let year;
  if (!isLoading) {
    if (data.art.close_ups) {
      closeUps = data.art.close_ups.split(",");
    }
    idExtra && customPics.hasOwnProperty(idExtra) ? (mainPic = idExtra) : (mainPic = data.art.stock_id);
    if (extra) {
      const releaseDate = formatDate(extra.art.completion);
      year = releaseDate.slice(-4);
    } else {
      const releaseDate = formatDate(data.art.completion);
      year = releaseDate.slice(-4);
    }
  }
  //console.log(mainPic);

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
            {idExtra ? (
              <img
                alt={extra.art.alt_text}
                className={extra.art.shape}
                src={require(`../images/full/${idExtra}.jpg`)}
              />
            ) : (
              <img
                alt={data.art.alt_text}
                className={data.art.shape}
                src={require(`../images/full/${mainPic}.jpg`)}
              />
            )}
          </div>

          <div className="art__info">
            {!data.art.close_ups ? (
              <></>
            ) : (
              <div className="art__close_ups">
                <h2>Close Ups</h2>
                <ul className="gallery">
                  {closeUps.map((closeUp) => {
                    return (
                      <Link to={`/art/${idMain}-${closeUp}`} key={closeUp}>
                        <li className="art__close_up">
                          <img
                            alt={`${closeUp}-preview`}
                            src={require(`../images/preview/${closeUp}.jpg`)}
                          />
                        </li>
                      </Link>
                    );
                  })}
                  <Link to={`/art/${idMain}`}>
                    <li className="art__close_up" key={idMain}>
                      <img
                        alt={`${idMain}-preview`}
                        src={require(`../images/preview/${data.art.stock_id}.jpg`)}
                      />
                    </li>
                  </Link>
                </ul>
              </div>
            )}
            <p>Made from: {idExtra && customPics.hasOwnProperty(idExtra) ? extra.art.made_from : data.art.made_from}</p>
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
              <p className="art__quote">
                "{idExtra && customPics.hasOwnProperty(idExtra) ? extra.art.quote : data.art.quote}"
              </p>
              <p className="art__quote_source">
                {idExtra && customPics.hasOwnProperty(idExtra) ? extra.art.book_title : data.art.book_title}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );

}