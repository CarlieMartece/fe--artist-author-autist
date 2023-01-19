import { useEffect, useState } from "react";
import { fetchProjects } from "../api";
import CodeCard from "./CodeCard";

export default function Code() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((codeProjects) => {
        setProjects(codeProjects);
        setIsLoading(false);
    });
  }, []);

  return (
    <main>
        {isLoading? <h3>Loading...</h3> :
        <>
         <ul id="Code">
             {projects.code.map((project) => {
                 return (
                     <CodeCard 
                        key={project.project_id}
                        projectId={project.project_id}
                        stockId={project.stock_id}
                        name={project.name}
                        update={project.last_update}
                        stack={project.tech_stack}
                     />
                 )
             })}
         </ul>
        </>}
    </main>
  );
}
