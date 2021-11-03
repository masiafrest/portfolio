import "./Card.css";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="imgCard">
        <img src={data.img} alt="" />
        <div className="links">
          <a href={data.link}>link</a>
          <a href={data.github}>Github</a>
        </div>
      </div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
