
import { Aboutme } from "./components/Aboutme";
import { Carousel } from "./components/Carousel";
import Header from "./components/Header";
import Home from "./components/Home"
import Particle from "./utils/Particle";


function App() {
  return (
    <div className="">
      <Particle>
        <Header/>
        <Home/>
      <div className=" mt-[10rem]">
        <Aboutme/>
      </div>
      </Particle>
  
      <div className="relative z-10 h-[100vh] w-[100wh]">

        <Carousel/>
      </div>
    </div>
  );
}

export default App;
