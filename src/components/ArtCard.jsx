import { Link } from "react-router-dom";
const customLinks = require("../customLinks");

export default function ArtCard({
  artId,
  stockId,
  threeWords,
  closeArray,
  isClose,
}) {
  
  let cardLink = "";
  if (customLinks.hasOwnProperty(artId)) {
    cardLink = customLinks[artId];
  } else if (closeArray) {
    cardLink = `/art/collage/${threeWords}`;
  } else if (isClose) {
    console.log(stockId);
    cardLink = `/art/collage/${threeWords}--${stockId}`;
  } else {
    cardLink = `/art/${artId}`;
  }

  const GalleryPic = () => {
    return (
      <li className="galleryItem" key={artId}>
        <div className="gallery_pic">
          <img
            alt={`${artId}-preview`}
            className="centre"
            src={require(`../images/preview/${stockId}.jpg`)}
          />
        </div>
      </li>
    );
  };

  return (
    <Link to={cardLink}>
      <GalleryPic />
    </Link>
  );
}
