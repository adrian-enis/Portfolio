

const Home = () => {
  return (
    <section className="">
      <article className=" text-center mt-[30%] md:mt-[25%] lg:mt-[8%]">
        <h2 className="font-extrabold text-slate-300 text-5xl md:text-8xl">
          Adrian Enis
        </h2>
        <h3 className="font-bold text-3xl text-yellow-500 md:text-5xl">
          Full stack developer
        </h3>

        <div className="flex justify-evenly mt-[1%]  w-[50%] m-auto">
          <a target="_blank" href="https://www.linkedin.com/in/adrianenis/" className="text-3xl font-semibold text-blue-600">Linkedin</a>
          <a target="_blank" href="https://github.com/adrian-enis" className="text-3xl font-semibold text-white">Github</a>
        
        </div>
      </article>

     
    </section>
  );
};

export default Home;
