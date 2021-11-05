import "./AboutMe.css";

export default function AboutMe({ data }) {
  const { title, description } = data;
  return (
    <section className="aboutMe">
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </section>
  );
}
