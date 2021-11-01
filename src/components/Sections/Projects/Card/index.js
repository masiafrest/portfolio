import "./Card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <h1>{data.title}</h1>
      <img src={data.img} alt="" />
      <p>{data.description}</p>
      <a href={data.link}>link</a>
      <a href={data.github}>github</a>
    </div>
  );
}
