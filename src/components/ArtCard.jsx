import { Link } from "react-router-dom";

export default function ArtCard({
  customLink,
  artId,
  stockId,
  altText,
  threeWords
}) {
  
  let cardLink = "";
  if (customLink) {
    console.log(customLink)
    cardLink = customLink;
  } else if (stockId[0] === '3' || stockId[0] === '9') {
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
