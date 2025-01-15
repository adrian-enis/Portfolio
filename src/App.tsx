
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import {Aboutme} from "./components/Aboutme";
import {Carousel} from "./components/Carousel";
import Particle from "./utils/Particle";

function App() {
  return (
    <Router>
      <Particle>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/works" element={<Carousel />} />
          <Route path="/linkedin" element={<Navigate to="https://www.linkedin.com/in/adrianenis/"/>} />
          <Route path="/github" element={<Navigate to="https://github.com/adrian-enis"/>} />
  
        </Routes>
      </Particle>
    </Router>
  );
}

export default App;
