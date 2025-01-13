import React, { useEffect, useState } from "react";
import { dataWorks, dataThumbnail } from "../data/dataBase";
import { WorkData } from "../types";


export const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataWorks.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* List */}
      <section>
        {/* Item */}
        {dataWorks.map((dataPrev: WorkData, index) => (
          <article
            key={dataPrev.id}
            className={`absolute inset-0 transition-opacity duration-1000
                   ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={`/img/${dataPrev.image}.jpg`}
              className="w-full h-full object-cover blur-lg"
              alt="Imagenes de mis proyectos"
            />
            <div
              className="text-white absolute w-[1200px]
        max-w-[80%] top-[20%] left-[50%] translate-x-[-50%]
         box-content"
            >
              <h2 className="tracking-[7px] font-bold text-lg md:text-3xl">
                {dataPrev.name}
              </h2>
              <h3 className="font-black tracking-[2px] text-2xl md:text-4xl text-orange-300">
                {dataPrev.title}
              </h3>
              <p className="text-lg tracking-wider md:mt-3   lg:w-[60%]">
                {dataPrev.description}
              </p>
              {/* Content */}
              <div
                className="text-white gap-5 md:gap-0 mt-5 font-bold text-lg 
       md:text-2xl grid grid-cols-2 md:flex 
       md:justify-around md:w-[50%]"
              >
   
                  <a
                  className="bg-green-700 p-3 rounded-lg"
                  type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={dataPrev.netlify}
                  >
                    Ver Mas
                  </a>
         
               
                  <a
                    href={dataPrev.linkedin}
                    className="bg-blue-600 p-3 rounded-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
              
              </div>
            </div>
          </article>
        ))}
      </section>
      {/* Thumbnail */}
      <section className="absolute z-50 bottom-14  left-[50%] w-max flex gap-5">
        {dataThumbnail.map((prevThumbnail) => (
          <article
            key={prevThumbnail.id}
            className="bg-white w-[150px] h-[220px] relative flex-shrink-0 overflow-hidden rounded-3xl"
          >
            <img
              src={`img/${prevThumbnail.image}.jpg`}
              alt="imagenes de mis proyectos carousel"
              className="h-[100%] w-[100%] object-cover blur-md"
            />
            {/* Item */}
            <div className="">
              <div className="absolute bottom-3 left-3 right-3 text-white font-bold">
                <p>{prevThumbnail.title}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
      {/* Buttons */}
      <div className="bg-red-400 absolute flex items-center justify-center gap-5   top-[80%] right-[52%] w-[300px] max-w-[30%]">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width={"1.5"}
            stroke="currentColor"
            className="size-6 bg-slate-400 h-10 w-10 p-2 rounded-full transition-all hover:bg-slate-500 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 bg-slate-400 h-10 w-10 p-2 rounded-full transition-all  hover:bg-slate-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
