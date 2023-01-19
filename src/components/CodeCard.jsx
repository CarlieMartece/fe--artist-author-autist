import { Link } from "react-router-dom";
import formatDate from "../utils.js";


export default function CodeCard({ projectId, stockId, name, update, stack }) {
  
  const formattedDate = formatDate(update)

  return (
    <Link to={`/code/${projectId}`}>
      <li className="CodeCard" key={projectId}>
        <div className="code_name">
          <h3>{name}</h3>
        </div>
        <div className="code_date">
          <p>
            {formattedDate}
          </p>
        </div>
        <div className="code_pic">
          <img
            alt={`${name} - preview`}
            className="center"
            src={require(`../images/preview/${stockId}.jpg`)}
          />
        </div>
        <ul className="code_stack">
          {stack.map((element) => {
            return (
              <li className="li_tech">{element}</li>
            );
          })}
        </ul>
      </li>
    </Link>
  );
}
