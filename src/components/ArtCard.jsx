import { Link } from "react-router-dom";
const customLinks = require("../customLinks");

export default function ArtCard({ artId, stockId, threeWords, closeArray, isClose }) {
  let cardLink = "";
  if (customLinks.hasOwnProperty(artId)) {
    cardLink = customLinks[artId];
  } else if (closeArray || isClose) {
    console.log(threeWords)
    cardLink = `/art/collage/${threeWords}`;
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
