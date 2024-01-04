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
  SiTypescript,
  SiGo,
  SiDjango,
  SiPython,
  SiAngular,
  SiNextdotjs,
  SiSupabase,
  SiVercel,
  SiChakraui,
  SiTailwindcss
} from "react-icons/si";

const getImgSrc = (img) => {
  return  `${process.env.PUBLIC_URL}/assets/img/${img}`
};

export default function Card({ data }) {
  const { title, description, caracteristicas, link, github, stack , img} = data;
  const imgSrc = getImgSrc(img);
  return (
    <div className="card">
      <div className="imgCard">
        <img src={imgSrc} alt="" />
        <div className={link ? "links" : "link"}>
          {link && <a href={link}>link</a>}
          {github && <a href={github}>Github</a>} 
        </div>
      </div>
      <h1>{title}</h1>
      <span>{description}</span>
      <section className="caracteristicas">
        <ul aria-label="Caracteristicas:">
          {caracteristicas.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>
      <div className="stack">
        {stack.map((e) => {
          return <Icon key={e} type={e} />;
        })}
      </div>
    </div>
  );
}

function Icon({ type }) {
  if (type === "docker") return <SiDocker size="2.5em" title={type} />;
  if (type === "react") return <SiReact size="2.5em" title={type} />;
  if (type === "bootstrap") return <SiBootstrap size="2.5em" title={type} />;
  if (type === "materialui") return <SiMaterialui size="2.5em" title={type} />;
  if (type === "apollo") return <SiApollographql size="2.5em" title={type} />;
  if (type === "heroku") return <SiHeroku size="2.5em" title={type} />;
  if (type === "firebase") return <SiFirebase size="2.5em" title={type} />;
  if (type === "nodejs") return <SiNodedotjs size="2.5em" title={type} />;
  if (type === "solidity") return <SiSolidity size="2.5em" title={type} />;
  if (type === "graphql") return <SiGraphql size="2.5em" title={type} />;
  if (type === "prisma") return <SiPrisma size="2.5em" title={type} />;
  if (type === "mongodb") return <SiMongodb size="2.5em" title={type} />;
  if (type === "postgresql") return <SiPostgresql size="2.5em" title={type} />;
  if (type === "go") return <SiGo size="2.5em" title={type} />;
  if (type === "typescript") return <SiTypescript size="2.5em" title={type} />;
  if (type === "django") return <SiDjango size="2.5em" title={type} />;
  if (type === "python") return <SiPython size="2.5em" title={type} />;
  if (type === "angular") return <SiAngular size="2.5em" title={type} />;
  if (type === "nextjs") return <SiNextdotjs size="2.5em" title={type} />;
  if (type === "supabase") return <SiSupabase size="2.5em" title={type} />;
  if (type === "vercel") return <SiVercel size="2.5em" title={type} />;
  if (type === "chakraui") return <SiChakraui size="2.5em" title={type} />;
  if (type === "tailwind") return <SiTailwindcss size="2.5em" title={type} />;
  return null;
}
