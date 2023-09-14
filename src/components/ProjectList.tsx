import { useSearchParams } from "react-router-dom";
import { projects } from "../../public/data";
import ProjectCard from "./ProjectCard";
import { useColumns } from "../hooks/useColumns";

function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const filteredProjects = filter
    ? projects.filter((p) =>
        p.type.toLowerCase().includes(filter.toLowerCase())
      )
    : projects;
  const organizedProjects = useColumns(filteredProjects, 3);

  const handleFilter = (newFilter: string) => {
    setSearchParams(newFilter === "All" ? {} : { filter: newFilter });
  };

  return (
    <>
      <div className="button-container">
        <span>Filter:</span>
        {["All", "Houses", "Apartments", "Subdivisions"].map((filterOption) => (
          <button
            key={filterOption}
            className="hover-underline-animation hul-tighter"
            onClick={() => handleFilter(filterOption)}
          >
            {filterOption}
          </button>
        ))}
      </div>
      <div className="projects-wrapper">
        {organizedProjects.map((column, columnIndex) => (
          <div key={columnIndex} className="column">
            {column.map((project) => (
              <ProjectCard key={project.name} {...project} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectList;
