import "./Card.css";
import fixDropImg from "./images/fixdropAddRecibo.png";
import bugTrackerImg from "./images/bugTracker.png";
import postItemDarkImg from "./images/posItemDark.png";
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

const getImgSrc = (title) => {
  if (title === "FixDrop") return fixDropImg;
  if (title === "BugTracker") return bugTrackerImg;
  if (title === "Sistema de POS e inventario") return postItemDarkImg;
  if (title === "Creacion de Nft") return fixDropImg;
};
export default function Card({ data }) {
  const { title, description, caracteristicas, link, github, stack } = data;
  const imgSrc = getImgSrc(title);

  return (
    <div className="card">
      <div className="imgCard">
        <img src={imgSrc} alt="" />
        <div className={link ? "links" : "link"}>
          {link && <a href={link}>link</a>}
          <a href={github}>Github</a>
        </div>
      </div>
      <h1>{title}</h1>
      <span>{description}</span>
      <section className="caracteristicas">
        <ul aria-label="Caracteristicas:">
          {caracteristicas.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </section>
      <div className="stack">
        {stack.map((e) => {
          if (e === "docker") return <SiDocker size="2.5em" title={e} />;
          if (e === "react") return <SiReact size="2.5em" title={e} />;
          if (e === "bootstrap") return <SiBootstrap size="2.5em" title={e} />;
          if (e === "materialui")
            return <SiMaterialui size="2.5em" title={e} />;
          if (e === "apollo") return <SiApollographql size="2.5em" title={e} />;
          if (e === "heroku") return <SiHeroku size="2.5em" title={e} />;
          if (e === "firebase") return <SiFirebase size="2.5em" title={e} />;
          if (e === "nodejs") return <SiNodedotjs size="2.5em" title={e} />;
          if (e === "solidity") return <SiSolidity size="2.5em" title={e} />;
          if (e === "graphql") return <SiGraphql size="2.5em" title={e} />;
          if (e === "prisma") return <SiPrisma size="2.5em" title={e} />;
          if (e === "mongodb") return <SiMongodb size="2.5em" title={e} />;
          if (e === "postgresql")
            return <SiPostgresql size="2.5em" title={e} />;
        })}
      </div>
    </div>
  );
}
