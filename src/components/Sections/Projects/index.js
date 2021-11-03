import Card from "./Card";
import "./Project.css";

export default function Projects({ data }) {
  return (
    <div className="projects">
      <h2>projects</h2>
      <div className="container">
        <Card data={data.projects} />
        <Card data={data.projects} />
        <Card data={data.projects} />
        <Card data={data.projects} />
        <Card data={data.projects} />
        <Card data={data.projects} />
      </div>
    </div>
  );
}
