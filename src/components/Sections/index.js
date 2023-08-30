import "./Sections.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactUs from "./ContactUs";
import Blog from "./Blog";

function Sections({ datas, setRefs }) {
  return (
    <section id='section'>
      {datas.map((data, i) => {
        const id = i + 1;
        return (
          <div
            ref={setRefs[i + 1]}
            key={id}
            className={`section ${data.type}`}
            id={id}
          >
            {data.type === "About me" && <AboutMe data={data} />}
            {data.type === "Projects" && <Projects data={data} />}
            {data.type === "Blogs" && <Blog data={data} />}
            {data.type === "Contact us" && <ContactUs data={data} />}
          </div>
        );
      })}
    </section>
  );
}

export default Sections;
