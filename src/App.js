import { useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import Sections from "./components/Sections";

import { mockSectionDatas, sectionDatas } from "./datas/sectionDatas";

// import useOnMultipleScreen from "./hooks/useOnMultipleScreen";
import useOnScreen from "./hooks/useOnScreen";

const observerOptions = {
  // rootMargin: "-80px 0px 0px 0px",
  threshold: 0.5,
};

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty("--color-background", "#1F2023");
    document.documentElement.style.setProperty("--color-foreground", "#EFEFEF");
    document.documentElement.style.setProperty(
      "--color-background-hover",
      "#474444"
    );
  }, []);

  const [setRefHero, visibleHero] = useOnScreen(observerOptions);
  const [setRef, visible] = useOnScreen(observerOptions);
  const [setRef1, visible1] = useOnScreen({ threshold: [0.1] });
  const [setRef2, visible2] = useOnScreen(observerOptions);

  const setRefs = [setRefHero, setRef, setRef1, setRef2];
  const visibles = [visibleHero, visible, visible1, visible2];

  return (
    <>
      <HeroHeader setRef={setRefHero} />
      <NavBar titles={sectionDatas.map((e) => e.title)} visibles={visibles} />
      <Sections datas={sectionDatas} setRefs={setRefs} />
    </>
  );
}

export default App;
