import { Link, useSearchParams } from "react-router-dom";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the filter value from the URL search parameters
  const filter = searchParams.get("filter");

  // Filter the projects based on the filter value
  const filteredProjects = filter
    ? projects.filter((project) => project.type === filter)
    : projects;

  return (
    <>
      <div className="button-container">
        <span>Filter:</span>
        <button
          className="hover-underline-animation hul-tighter"
          onClick={() => setSearchParams({})}
        >
          All
        </button>
        <button
          className="hover-underline-animation hul-tighter"
          onClick={() => setSearchParams({ filter: "houses" })}
        >
          Houses
        </button>
        <button
          className="hover-underline-animation hul-tighter"
          onClick={() => setSearchParams({ filter: "apartments" })}
        >
          Apartments & Townhouses
        </button>
        <button
          className="hover-underline-animation hul-tighter"
          onClick={() => setSearchParams({ filter: "subdivisions" })}
        >
          Subdivisions
        </button>
      </div>
      <div className="projects-wrapper">
        {filteredProjects.map((project) => (
          <ProjectCard
            name={project.name}
            displayName={project.displayName}
            hero={project.hero}
          />
        ))}
      </div>
    </>
  );
}

export default ProjectList;
