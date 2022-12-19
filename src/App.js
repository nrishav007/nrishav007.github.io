import { useEffect, useState } from "react";
import "./App.css";
import { Desktop } from "./Components/Navbar/Desktop";
import Mobile from "./Components/Navbar/Mobile";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Skills } from "./Pages/Skills";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";
import Git from "./Pages/Git";
import { Box } from "@chakra-ui/react";
import Font from "react-font";
function App() {
  document.title = "Rishav's Portfolio";

  const [size, setSize] = useState(window.innerWidth);

  const updateSize = () => setSize(window.innerWidth);

  useEffect(() => (window.onresize = updateSize), []);

  return (
    <Box className="App">
      <Font family='Ultra' weight={600}>
        {size >= 525 ? <Desktop /> : <Mobile />}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Git />
        <Contact />
      </Font>
    </Box>
  );
}

export default App;
