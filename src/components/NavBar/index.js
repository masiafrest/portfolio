import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

export default function NavBar({ titles, visibles }) {
  const [aTagWidth, setATagWidth] = useState(0);
  const [aTagIndex, setATagIndex] = useState(0);
  const translateX = `${aTagWidth * (aTagIndex - 1)}px`;
  const translateX2 = `${aTagWidth * aTagIndex}px`;
  const navRef = useRef(null);
  console.log("--------------------------------------");
  console.log("aTagWidth: ", aTagWidth);
  console.log("aTagIndex: ", aTagIndex);
  console.log("trasnlateX, aTagWidth * aTagIndex: ", translateX);
  console.log("trasnlateX2, aTagWidth *(  aTagIndex + 1 ): ", translateX2);
  console.log("--------------------------------------");

  useEffect(() => {
    const width = navRef.current.firstChild.offsetWidth;
    setATagWidth(width);

    const onResize = () => {
      const width = navRef.current.firstChild.offsetWidth;
      setATagWidth(width);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (visibles.some((e) => e === true)) {
      setATagIndex(visibles.indexOf(true));
    }
    // setATagIndex(visibles.indexOf(true));
  }, [visibles]);

  const onClick = (e) => {
    setATagWidth(e.target.offsetWidth);
    setATagIndex(e.target.getAttribute("index"));
  };

  return (
    <nav id="menu" ref={navRef}>
      {titles.map((v, i) => (
        <a href={`#${i + 1}`} key={i} index={i} onClick={onClick}>
          {v}
        </a>
      ))}
      <span
        className="indicator"
        style={{
          width: aTagWidth,
          left: translateX,
          // transform: `translate(${translateX})`,
        }}
        id="indicator"
      ></span>
      <span
        className="indicator2"
        style={{
          width: translateX2,
        }}
        id="indicator2"
      ></span>
    </nav>
  );
}
