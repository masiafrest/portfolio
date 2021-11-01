import "./AboutMe.css";

export default function AboutMe({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
}
