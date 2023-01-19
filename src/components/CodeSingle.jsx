import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import { fetchProjectSingle } from "../api";
import formatDate from "../utils.js";

export default function CodeSingle() {
  const { project_id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjectSingle(project_id).then((project) => {
      setData(project);
      setIsLoading(false);
    });
  }, [project_id]);
  console.log(data.project);

  let launchDate,
    update = "";

  if (!isLoading) {
    launchDate = formatDate(data.project.first_launched);
    update = formatDate(data.project.last_update);
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{data.project.name}</h2>
          <p>{data.project.description}</p>
          <p>First launched: {launchDate}</p>
          <p>Last Update: {update}</p>
          <p>{data.project.further_info}</p>
          <ul className="code_stack">
            {data.project.tech_stack.map((element) => {
              return (
                <img
                  alt={`${element} - logo`}
                  src={require(`../images/layout/logo-${element}.jpg`)}
                />
              );
            })}
          </ul>
          <ExternalLink href={data.project.location}>
            <img
              alt={`${data.project.name} - preview`}
              className="center"
              src={require(`../images/full/${data.project.stock_id}.jpg`)}
            />
          </ExternalLink>
        </>
      )}
    </main>
  );
}
