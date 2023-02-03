import { useEffect, useState } from "react";
import { fetchArt } from "../api";
import ArtCard from "./ArtCard";

export default function ArtGalleryYears({ previousYear }) {
  const [artData, setArtData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [previous, setPrevious] = useState(false);
  const [isError, setIsError] = useState(false);
  const year = previousYear || new Date().getFullYear();
  //const year = 1999;
  //let category = 16;

  useEffect(() => {
    fetchArt(year)
      .then((art) => {
        setArtData(art);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          setIsError(true);
          setIsLoading(false);
        }
      });
  }, [year]);

  const loadPrevious = () => {
    setPrevious(true);
  };
  const loadButton = (
    <button className="art__previous_button" onClick={loadPrevious}>
      <h2>{year - 1}:</h2>
    </button>
  );

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {isError ? (
            <>
              <ArtGalleryYears previousYear={year - 1} />
            </>
            
          ) : (
            <div id="ArtGalleryYears">
              <ul className="gallery">
                {artData.map((item) => {
                  return (
                    <ArtCard
                      key={item.art_id}
                      customLink={item.custom_link}
                      artId={item.art_id}
                      stockId={item.stock_id}
                      altText={item.alt_text}
                      threeWords={item.three_word_description}
                      closeArray={item.close_ups}
                      isClose={item.is_close_up}
                    />
                  );
                })}
              </ul>
              {year > 1999 ? <>{loadButton}</> : <></>}
              {previous ? <ArtGalleryYears previousYear={year - 1} /> : <></>}
            </div>
          )}
        </>
      )}
    </>
  );
}
