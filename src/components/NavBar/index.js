import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [aTagWidth, setATagWidth] = useState(0);
  const [aTagIndex, setATagIndex] = useState(0);
  const translateX = `${aTagWidth * aTagIndex}px`;
  const navRef = useRef(null);

  useEffect(() => {
    const onResize = () => {
      setATagWidth(navRef.current.firstChild.offsetWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onClick = (e) => {
    setATagWidth(e.target.offsetWidth);
    setATagIndex(e.target.getAttribute("index"));
  };

  return (
    <nav id="menu" ref={navRef}>
      {["Seccion 1", "Seccion 2", "Seccion 3", "Seccion 4", "Seccion 5"].map(
        (v, i) => (
          <a href={`#${i + 1}`} key={i} index={i} onClick={onClick}>
            {v}
          </a>
        )
      )}
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
