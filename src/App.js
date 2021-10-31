import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import Sections from "./components/Sections";

const sectionData = [
  {
    title: "Seccion 1",
    github: "github",
    link: "link",
  },
];

const mockSectionData = Array(5).map((e, i) => ({
  title: `Seccion ${i}`,
  github: "github",
  link: "link",
}));

function App() {
  return (
    <>
      <HeroHeader />
      <NavBar />
      <Sections />
    </>
  );
}

export default App;
