import { useParams } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { useEffect, useState } from "react";
import { fetchProjectSingle } from "../api";
const { formatDate } = require("../utils.js");

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

  let launchDate,
    update = "";

  if (!isLoading) {
    launchDate = formatDate(data.project.first_launched);
    if (data.project.last_update === null) {
      update = launchDate;
    } else {
      update = formatDate(data.project.last_update);
    }
  }

  return (
    <main>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div id="CodeSingle">
            <div id="project_details">
              <h2>{data.project.name}</h2>
              <p className="tagline code_info">{data.project.description}</p>
              <ExternalLink href={data.project.location}>
                <p className="code_info">View Here</p>
              </ExternalLink>
              <p className="code_info">First launched: {launchDate}</p>
              <p className="code_info">Last Update: {update}</p>
              <p className="code_info">{data.project.further_info}</p>
              <div id="code_tech">
                <h3>Current stack:</h3>
                <ul className="code_stack">
                  {data.project.tech_stack.map((element) => {
                    return (
                      <img
                        alt={`${element} - logo`}
                        key={`${element} - key`}
                        src={require(`../images/layout/logo-${element}.jpg`)}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="gallery_pic mobile">
              <h3>Mobile View:</h3>
              <ExternalLink href={data.project.location}>
                <img
                  alt={`${data.project.name} - preview`}
                  className="centre"
                  src={require(`../images/full/${data.project.stock_id}.jpg`)}
                />
              </ExternalLink>
            </div>

            <div className="gallery_pic desktop">
              <h3>Desktop View:</h3>
              <ExternalLink href={data.project.location}>
                <img
                  alt={`${data.project.name} - preview`}
                  className="centre"
                  src={require(`../images/full/${data.project.stock_id}d.jpg`)}
                />
              </ExternalLink>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
