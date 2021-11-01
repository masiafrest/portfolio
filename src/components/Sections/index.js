import "./Sections.css";

function Sections({ datas, setRefs }) {
  return (
    <section>
      {datas.map((data, i) => {
        const id = i + 1;
        return (
          <div ref={setRefs[i]} key={id} className="section" id={id}>
            <div className="card">
              <h1>{data.title}</h1>
              <img src="img/1.jpg" alt="" />
              <p>{data.description}</p>
              <a href={data.github}>github</a>
              <a href={data.link}>link</a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Sections;
