import "./Card.css";
import {
  SiReact,
  SiMaterialui,
  SiBootstrap,
  SiApollographql,
  SiGraphql,
  SiFirebase,
  SiHeroku,
  SiNodedotjs,
  SiSolidity,
  SiDocker,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

export default function Card({ data }) {
  return (
    <div className="card">
      <div className="imgCard">
        <img src="fixdropAddRecibo.png" alt="" />
        <div className="links">
          <a href={data.link}>link</a>
          <a href={data.github}>Github</a>
        </div>
      </div>
      <h1>{data.title}</h1>
      <span>{data.description}</span>
      <section className="caracteristicas">
        <ul aria-label="Caracteristicas:">
          {data.caracteristicas.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </section>
      <div className="stack">
        {data.stack.map((e) => {
          if (e === "docker") return <SiDocker size="2.5em" />;
          if (e === "react") return <SiReact size="2.5em" />;
          if (e === "bootstrap") return <SiBootstrap size="2.5em" />;
          if (e === "materialui") return <SiMaterialui size="2.5em" />;
          if (e === "apollo") return <SiApollographql size="2.5em" />;
          if (e === "heroku") return <SiHeroku size="2.5em" />;
          if (e === "firebase") return <SiFirebase size="2.5em" />;
          if (e === "nodejs") return <SiNodedotjs size="2.5em" />;
          if (e === "solidity") return <SiSolidity size="2.5em" />;
          if (e === "graphql") return <SiGraphql size="2.5em" />;
          if (e === "prisma") return <SiPrisma size="2.5em" />;
          if (e === "mongodb") return <SiMongodb size="2.5em" />;
          if (e === "postgresql") return <SiPostgresql size="2.5em" />;
        })}
      </div>
    </div>
  );
}
