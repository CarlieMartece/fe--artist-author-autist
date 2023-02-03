import { Link } from "react-router-dom";

export default function ArtCard({
  customLink,
  artId,
  stockId,
  altText,
  threeWords,
  closeArray,
  isClose,
}) {
  
  let cardLink = "";
  if (customLink) {
    cardLink = customLink;
  } else if (closeArray) {
    cardLink = `/art/collage/${threeWords}`;
  } else if (isClose) {
    cardLink = `/art/collage/${threeWords}--${stockId}`;
  } else {
    cardLink = `/art/${artId}`;
  }

  const GalleryPic = () => {
    return (
      <li className="galleryItem" key={artId}>
        <div className="gallery_pic">
          <img
            alt={altText}
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
