import { useParams } from "react-router-dom";
import Gallery from "./Gallery";
import { projects } from "../data";
import NoMatch from "../pages/NoMatch";

function ProjectPage() {
  const params = useParams();
  const projectName = params.project;

  const project = projects.find((e) => e.name === projectName);

  const path = "/src/images/projects/" + project?.name + "/";

  if (!project) {
    return <NoMatch />;
  }

  let imageNames: string[] = [];

  for (let i = 0; i < project?.images; i++) {
    imageNames.push(project.name + "-" + i);
  }

  console.log(imageNames);

  return (
    <>
      <img
        className="project-page-hero-image"
        src={`${path + project.name}-${project.hero}.jpg`}
      />
      <div className="content">
        <div className="text-container no-after">
          <h1>{project?.displayName}</h1>
          {project.desription && (
            <p className="project-description">{project.desription}</p>
          )}
        </div>
        <Gallery images={imageNames} path={path} />
      </div>
    </>
  );
}

export default ProjectPage;