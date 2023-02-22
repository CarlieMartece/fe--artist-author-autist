import { Link } from "react-router-dom";
const { formatDate } = require("../utils.js");


export default function CodeCard({ projectId, stockId, name, update, stack }) {
  
  const formattedDate = formatDate(update)

  return (
    <Link to={`/code/${projectId}`}>
      <li className="galleryItem" key={projectId}>
        <div className="code_name">
          <h3>{name}</h3>
        </div>
        <div className="code_date">
          <p>
            {formattedDate}
          </p>
        </div>
        <div className="gallery_pic">
          <img
            alt={`${name} - preview`}
            className="centre"
            src={require(`../images/preview/${stockId}.jpg`)}
          />
        </div>
        <ul className="code_stack_text">
          {stack.map((element) => {
            return (
              <li key={element}>{element}</li>
            );
          })}
        </ul>
      </li>
    </Link>
  );
}
