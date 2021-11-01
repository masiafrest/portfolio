import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

export default function NavBar({ titles, visibles }) {
  const [aTagWidth, setATagWidth] = useState(0);
  const [aTagIndex, setATagIndex] = useState(0);
  const translateX = `${aTagWidth * aTagIndex}px`;
  const navRef = useRef(null);

  useEffect(() => {
    const width = navRef.current.firstChild.offsetWidth;
    setATagWidth(width);

    const onResize = () => {
      setATagWidth(width);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setATagIndex(visibles.indexOf(true));
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
        }}
        id="indicator"
      ></span>
    </nav>
  );
}
