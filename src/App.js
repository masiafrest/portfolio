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
  const [setRef, visible] = useOnScreen(observerOptions);
  const [setRef1, visible1] = useOnScreen(observerOptions);
  const [setRef2, visible2] = useOnScreen(observerOptions);
  const [setRef3, visible3] = useOnScreen(observerOptions);
  const [setRef4, visible4] = useOnScreen(observerOptions);

  const setRefs = [setRef, setRef1, setRef2, setRef3, setRef4];
  const visibles = [visible, visible1, visible2, visible3, visible4];

  return (
    <>
      <HeroHeader />
      <NavBar titles={sectionDatas.map((e) => e.title)} visibles={visibles} />
      <Sections datas={sectionDatas} setRefs={setRefs} />
    </>
  );
}

export default App;
