import Card from "./Card";

export default function Projects({ data }) {
  return (
    <div className="projects">
      <h2>projects</h2>
      <Card data={data.projects} />
    </div>
  );
}
