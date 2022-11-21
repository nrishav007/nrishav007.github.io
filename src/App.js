import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Desktop } from './Components/Navbar/Desktop';
import Mobile from './Components/Navbar/Mobile';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Skills } from './Pages/Skills';
import { Projects } from './Pages/Projects';
import { Contact } from './Pages/Contact';
function App() {
  document.title = "Rishav's Portfolio";

  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () =>
    setSize(window.innerWidth);

  useEffect(() => (window.onresize = updateSize), []);

  const HomeRef = useRef();
  const AboutRef = useRef();
  const SkillsRef = useRef();
  const ProjRef = useRef();
  const ConRef = useRef();

  return (
    <div className="App">
      {
        size >= 525 ? <Desktop home={HomeRef} about={AboutRef} skill={SkillsRef} proj={ProjRef} contact={ConRef} /> : <Mobile home={HomeRef} about={AboutRef} skill={SkillsRef} proj={ProjRef} contact={ConRef} />
      }
      <Home HomeRef={HomeRef} />
      <About AboutRef={AboutRef} />
      <Skills SkillsRef={SkillsRef} />
      <Projects ProjRef={ProjRef} />
      <Contact ConRef={ConRef} />
    </div>
  );
}

export default App;
