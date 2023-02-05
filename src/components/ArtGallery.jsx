import { useEffect, useState } from "react";
import { fetchArt } from "../api";
import ArtCard from "./ArtCard";

export default function ArtGallery({ selectedYear, category }) {
  const [artData, setArtData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const year = selectedYear || 314;
  console.log(`gallery cat ${category}`)
  console.log(`gallery year ${year}`)

  useEffect(() => {
    fetchArt(year, category)
      .then((art) => {
        setArtData(art);
        setIsLoading(false);
      })
  }, [year, category]);


  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
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
            </div>
        </>
      )}
    </>
  );
}
