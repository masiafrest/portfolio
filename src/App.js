import logo from './logo.svg';
import 'normalize.css'
import './App.css';
import NavBar from './components/NavBar';
import HeroHeader from './components/NavBar/HeroHeader';

function App() {
  return (
    <>
      <HeroHeader />
      <NavBar />
    </>
  );
}

export default App;
