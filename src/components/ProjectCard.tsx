import { useNavigate } from "react-router-dom";

interface ProjectCard {
  name: string;
  displayName: string;
  hero: number;
}

function ProjectCard(props: ProjectCard) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/work/" + props.name)}
      className="project-card"
      style={{
        backgroundImage: `url(./images/projects/${props.name}/${props.name}-${props.hero}.jpg)`,
      }}
    >
      <div className="project-card-overlay" />
      <h2>{props.displayName}</h2>
    </div>
  );
}

export default ProjectCard;
