import "./AboutMe.css";

export default function AboutMe({ data }) {
  return (
    <section className="aboutMe">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </section>
  );
}
