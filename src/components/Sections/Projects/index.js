import Card from "./Card";
import "./Project.css";

export default function Projects({ data }) {
  return (
    <div className="projects">
      <h2>Proyectos</h2>
      <div className="container">
        {data.projects.map((e) => (
          <Card data={e} />
        ))}
      </div>
    </div>
  );
}
