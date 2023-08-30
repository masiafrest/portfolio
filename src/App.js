import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import HeroHeader from "./components/HeroHeader";
import Sections from "./components/Sections";

import { sectionDatas } from "./datas/sectionDatas";

// import useOnMultipleScreen from "./hooks/useOnMultipleScreen";
import useOnScreen from "./hooks/useOnScreen";

const observerOptions = {
  // rootMargin: "-80px 0px 0px 0px",
  threshold: 0.5,
};

const color = {
  lotionColor: "#fafafa",
  raisinBlack: "#1F2023",
  antiFlashWhite: "#f0f0f0",
  outerSpace: "#474444",
  brightGray: "#EFEFEF",
};
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.style.setProperty(
        "--color-background",
        color.raisinBlack
      );
      document.documentElement.style.setProperty(
        "--color-foreground",
        color.brightGray
      );
      document.documentElement.style.setProperty(
        "--color-background-hover",
        color.outerSpace
      );
    } else {
      document.documentElement.style.setProperty(
        "--color-background",
        color.lotionColor
      );
      document.documentElement.style.setProperty(
        "--color-foreground",
        color.raisinBlack
      );
      document.documentElement.style.setProperty(
        "--color-background-hover",
        color.antiFlashWhite
      );
    }
  }, [isDarkMode]);

  const [setRefHero, visibleHero] = useOnScreen(observerOptions);
  const [setRef, visible] = useOnScreen(observerOptions);
  const [setRef1, visible1] = useOnScreen({ threshold: [0.1] });
  const [setRef2, visible2] = useOnScreen(observerOptions);

  const setRefs = [setRefHero, setRef, setRef1, setRef2];
  const visibles = [visibleHero, visible, visible1, visible2];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <HeroHeader setRef={setRefHero} />
      <NavBar
        titles={sectionDatas.map((e) => e.title)}
        visibles={visibles}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Sections datas={sectionDatas} setRefs={setRefs} />
    </>
  );
}

export default App;
