import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
const customLinks = require("../customLinks");

export default function ArtCard({ artId, stockId }) {
  let cardLink = "";
  if (customLinks.hasOwnProperty(artId)) {
    cardLink = customLinks[artId];
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
