// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Desktop } from './Components/Navbar/Desktop';
import Mobile from './Components/Navbar/Mobile';
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
      <p>width= {size}</p>

    </div>
  );
}

export default App;
