import "./Sections.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactUs from "./ContactUs";

function Sections({ datas, setRefs }) {
  return (
    <section>
      {datas.map((data, i) => {
        const id = i + 1;
        console.log("data", data.type);
        return (
          <div ref={setRefs[i]} key={id} className="section" id={id}>
            {data.type === "About me" && <AboutMe data={data} />}
            {data.type === "Proyects" && <Projects data={data} />}
            {data.type === "Contact us" && <ContactUs data={data} />}
          </div>
        );
      })}
    </section>
  );
}

export default Sections;
