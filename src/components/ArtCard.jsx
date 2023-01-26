import { Link } from "react-router-dom";

export default function ArtCard({ artId, stockId }) {
    return (
    <Link to={`/art/${artId}`}>
      <li className="galleryItem artPreview" key={artId}>
        <div>
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
