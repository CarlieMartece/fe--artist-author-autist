import { Link } from "react-router-dom";

export default function ArtCard({ artId, stockId }) {
    return (
    <Link to={`/art/${artId}`}>
      <li className="galleryItem" key={artId}>
        <div className="gallery_pic">
          <img
            alt={`${artId}-preview`}
            className="centre"
            src={require(`../images/preview/${stockId}.jpg`)}
          />
        </div>
      </li>
    </Link>
  );
}
