import React from "react";
import "../utils/particle.scss";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
const Home = () => {
  return (
    <section className="bg-green-900 h-[100vh] w-[100vw] relative mt-[-50px] overflow-hidden">
      {/* Carousel */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      {/* List */}
      <section>
        {/* Item */}
        <article className="absolute inset-0">
          <img
            src={image1}
            className="w-full h-full object-cover blur-3xl"
            alt=""
          />
          {/* Content */}
          <div
            className="text-white absolute w-[1200px]
           max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
            box-content"
          >
            <h2 className=" tracking-[7px] font-bold text-lg md:text-3xl">
              Adrian Enis
            </h2>
            <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
              Front-End Developer
            </h3>
            <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
              Desarrollador Front end, con mas de 2 años de experiencia laboral
              en el area de Ecommerce, Agilizando procesos de desarrollo,
              maquetacion web, implementacion de logica funcional y orientada a
              objetos
            </p>
            {/* Buttons */}
            <div
              className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
          md:text-2xl grid grid-cols-2 md:flex 
          md:justify-around md:w-[50%] "
            >
              <button className="bg-blue-500 p-3 rounded-lg">Linkedin</button>
              <button className="bg-white p-3 rounded-lg text-black ">
                Github
              </button>
            </div>
          </div>
          
        </article>

        <article className="absolute inset-0">
          <img
            src={image2}
            className="w-full h-full object-cover blur-3xl"
            alt=""
          />
          {/* Content */}
          <div
            className="text-white absolute w-[1200px]
           max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
            box-content"
          >
            <h2 className=" tracking-[7px] font-bold text-lg md:text-3xl">
              Adrian Enis
            </h2>
            <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
              Front-End Developer
            </h3>
            <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
              Desarrollador Front end, con mas de 2 años de experiencia laboral
              en el area de Ecommerce, Agilizando procesos de desarrollo,
              maquetacion web, implementacion de logica funcional y orientada a
              objetos
            </p>
            {/* Buttons */}
            <div
              className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
          md:text-2xl grid grid-cols-2 md:flex 
          md:justify-around md:w-[50%] "
            >
              <button className="bg-blue-500 p-3 rounded-lg">Linkedin</button>
              <button className="bg-white p-3 rounded-lg text-black ">
                Github
              </button>
            </div>
          </div>
          
        </article>

        <article className="absolute inset-0">
          <img
            src={image3}
            className="w-full h-full object-cover blur-3xl"
            alt=""
          />
          {/* Content */}
          <div
            className="text-white absolute w-[1200px]
           max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
            box-content"
          >
            <h2 className=" tracking-[7px] font-bold text-lg md:text-3xl">
              Adrian Enis
            </h2>
            <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
              Front-End Developer
            </h3>
            <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
              Desarrollador Front end, con mas de 2 años de experiencia laboral
              en el area de Ecommerce, Agilizando procesos de desarrollo,
              maquetacion web, implementacion de logica funcional y orientada a
              objetos
            </p>
            {/* Buttons */}
            <div
              className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
          md:text-2xl grid grid-cols-2 md:flex 
          md:justify-around md:w-[50%] "
            >
              <button className="bg-blue-500 p-3 rounded-lg">Linkedin</button>
              <button className="bg-white p-3 rounded-lg text-black ">
                Github
              </button>
            </div>
          </div>
          
        </article>

        <article className="absolute inset-0">
          <img
            src={image4}
            className="w-full h-full object-cover blur-3xl"
            alt=""
          />
          {/* Content */}
          <div
            className="text-white absolute w-[1200px]
           max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
            box-content"
          >
            <h2 className=" tracking-[7px] font-bold text-lg md:text-3xl">
              Adrian Enis
            </h2>
            <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
              Front-End Developer
            </h3>
            <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
              Desarrollador Front end, con mas de 2 años de experiencia laboral
              en el area de Ecommerce, Agilizando procesos de desarrollo,
              maquetacion web, implementacion de logica funcional y orientada a
              objetos
            </p>
            {/* Buttons */}
            <div
              className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
          md:text-2xl grid grid-cols-2 md:flex 
          md:justify-around md:w-[50%] "
            >
              <button className="bg-blue-500 p-3 rounded-lg">Linkedin</button>
              <button className="bg-white p-3 rounded-lg text-black ">
                Github
              </button>
            </div>
          </div>
          
        </article>

        <article className="absolute inset-0">
          <img
            src={image5}
            className="w-full h-full object-cover blur-3xl"
            alt=""
          />
          {/* Content */}
          <div
            className="text-white absolute w-[1200px]
           max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
            box-content"
          >
            <h2 className=" tracking-[7px] font-bold text-lg md:text-3xl">
              Adrian Enis
            </h2>
            <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
              Front-End Developer
            </h3>
            <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
              Desarrollador Front end, con mas de 2 años de experiencia laboral
              en el area de Ecommerce, Agilizando procesos de desarrollo,
              maquetacion web, implementacion de logica funcional y orientada a
              objetos
            </p>
            {/* Buttons */}
            <div
              className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
          md:text-2xl grid grid-cols-2 md:flex 
          md:justify-around md:w-[50%] "
            >
              <button className="bg-blue-500 p-3 rounded-lg">Linkedin</button>
              <button className="bg-white p-3 rounded-lg text-black ">
                Github
              </button>
            </div>
          </div>
          
        </article>
      </section>

      {/* Thumbnail */}
      <section className="absolute z-50 bottom-14  left-[50%] bg-red-400 w-max flex gap-5">
        {/* Item */}
        <article className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden">
          <img
            src={image1}
            className="h-[100%] w-[100%] object-cover blur-md "
            alt=""
          />
          {/* Content */}
          <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
            <p>content</p>
            <p>description</p>
          </div>
        </article>
        <article className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden">
          <img
            src={image2}
            className="h-[100%] w-[100%] object-cover blur-md "
            alt=""
          />
          {/* Content */}
          <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
            <p>content</p>
            <p>description</p>
          </div>
        </article>
        <article className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden">
          <img
            src={image3}
            className="h-[100%] w-[100%] object-cover blur-md "
            alt=""
          />
          {/* Content */}
          <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
            <p>content</p>
            <p>description</p>
          </div>
        </article>
        <article className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden">
          <img
            src={image4}
            className="h-[100%] w-[100%] object-cover blur-md "
            alt=""
          />
          {/* Content */}
          <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
            <p>content</p>
            <p>description</p>
          </div>
        </article>
        <article className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden">
          <img
            src={image5}
            className="h-[100%] w-[100%] object-cover blur-md "
            alt=""
          />
          {/* Content */}
          <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
            <p>content</p>
            <p>description</p>
          </div>
        </article>
       
      </section>
    </section>
  );
};

export default Home;
