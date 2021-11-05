import "./HeroHeader.css";

export default function HeroHeader({ setRef }) {
  return (
    <header ref={setRef} className="hero" id="hero">
      <h1>Masiaf Frest</h1>
      <p>HTML • CSS • Javascript • React • Nodejs</p>
    </header>
  );
}
