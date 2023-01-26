import { useEffect, useState } from "react";
import { fetchArt } from "../api";
import ArtCard from "./ArtCard";

export default function Art() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchArt().then((art) => {
            setArtData(art);
            setIsLoading(false);
        })
    }, []);

    return (
        <main>
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
            </>
          )}
        </main>
      );
}