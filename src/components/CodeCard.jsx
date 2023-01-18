import { Link } from "react-router-dom";
const dayjs = require("dayjs");

export default function CodeCard({ stockId, name, update, stack }) {
  console.log(update);
  const date = dayjs(update);
  const day = Number(date.$D);
  const month = Number(date.$M) + 1;
  const year = Number(date.$y);

  return (
    <Link to={`/code/`}>
      <li class="CodeCard">
        <div class="code_name">
          <h3>{name}</h3>
        </div>
        <div class="code_date">
          <p>
            {day}/{month}/{year}
          </p>
        </div>
        <div class="code_pic">
          <img
            alt={`${name} - preview`}
            src={require(`../images/preview/${stockId}.jpg`)}
          />
        </div>
        <div class="code_stack">
          <ul>
            {stack.map((element) => {
              return (
                <img
                  alt={`${element} - logo`}
                  src={require(`../images/layout/logo-${element}.jpg`)}
                />
              );
            })}
          </ul>
        </div>
      </li>
    </Link>
  );
}
