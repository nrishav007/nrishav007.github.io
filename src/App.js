import { useEffect, useState } from 'react';
import './App.css';
import { Desktop } from './Components/Navbar/Desktop';
import Mobile from './Components/Navbar/Mobile';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
function App() {
  document.title="Rishav's Portfolio";
  const [size, setSize] = useState(window.innerWidth);
  const updateSize = () =>
    setSize(window.innerWidth);
  useEffect(() => (window.onresize = updateSize), []);
  return (
    <div className="App">
      {
        size>=525? <Desktop /> : <Mobile/>
      }
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
