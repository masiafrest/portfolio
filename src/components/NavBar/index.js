import './NavBar.css'

export default function NavBar() {

  const onClick = (e => console.log(e))
  return (
    <nav id="menu">
      <a href="#1" onClick={onClick}>Sección 1</a>
      <a href="#2">Sección 2</a>
      <a href="#3">Sección 3</a>
      <a href="#4">Sección 4</a>
      <a href="#5">Sección 5</a>
      <span className="indicator" id="indicator"></span>
    </nav>
  )
}