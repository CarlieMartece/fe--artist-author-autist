import { useEffect, useState } from "react";
import { fetchArt } from "../api";
import ArtCard from "./ArtCard";

export default function ArtGallery({ previousYear }) {

    const [artData, setArtData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [previous, setPrevious] = useState(false);
    const year = previousYear || new Date().getFullYear();

    useEffect(() => {
        fetchArt(year).then((art) => {
            setArtData(art);
            setIsLoading(false);
        })
    }, []);

    const loadPrevious = () => {
        setPrevious(true);
    };
    const loadButton = <button className="art__previous_button" onClick={loadPrevious}>{year - 1}:</button>

    return (
        <>
          {isLoading ? (
            <h3>Loading...</h3>
          ) : (
            <>
              <ul className="gallery">
                {artData.map((item) => {
                  return (
                    <ArtCard 
                        key={item.art_id}
                        artId={item.art_id}
                        stockId={item.stock_id}
                    />
                  );
                })}
                
              </ul>
              {year > 2000 ? <>{loadButton}</> : <></>}
              {previous ? <ArtGallery previousYear={year-1} /> : <></>}
            </>
          )}
        </>
      );
}