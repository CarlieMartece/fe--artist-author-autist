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
  console.log(projects)

  return (
    <main>
        {isLoading? <h3>Loading...</h3> :
        <>
         <ul className="main__list">
             {projects.code.map((project) => {
                 return (
                     <CodeCard 
                        key={project.project_id}
                        codeId={project.stock_id}
                        name={project.name}
                        stack={project.tech_stack}
                     />
                 )
             })}
         </ul>
        </>}
    </main>
  );
}
