import "./HeroHeader.css";

const languages = ["Rust", "HTML", "CSS", "Javascript","Typescript", "Python"]
const libray = ["React", "Nodejs", "Material UI", "Django", "Express"]

export default function HeroHeader({ setRef }) {
  return (
    <header ref={setRef} className="hero" id="hero">
      <h1>Julio Zeng</h1>

      <p>{languages.join(" • ")}</p>
      <p>{libray.join(" • ")}</p>
    </header>
  );
}
