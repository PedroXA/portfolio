function App() {
  return (
    <section className="flex flex-col ">
      <div className="flex flex-col text-white font-primary text-center">
        <h1
          className="bg-gradient-to-r from-lime-primary from-0% to-lime-secundary from-100% bg-clip-text text-transparent 
          text-5xl "
        >
          PEDRO XAVIER
        </h1>
        <h3 className="font-bold">DESENVOLVEDOR FRONT-END</h3>
        <p className="font-medium">
          Crio interfaces iterativas e atrativas para experiências web.
        </p>
      </div>

      {/* <nav className="flex flex-col justify- font-poppins">
        <a href="">Inicio</a>
        <a href="">Habilidades</a>
        <a href="">Projetos</a>
        <a href="">Galeria</a>x
      </nav> */}

      <p className="text-gray-100 text-justify m-5 font-segundary">
        Desenvolvedor <b>front-end</b> com um ano de experiência na prototipação
        e criação de aplicações web. Atualmente trabalho com as técnologias{" "}
        <b>React</b>, <b>Next</b>, <b>NodeJS</b> e <b>TailWind CSS</b>.
      </p>

      <h4 className="font-primary text-white font-bold text-center">
        HABILIDADES
      </h4>

      <section className="flex justify-center gap-10  text-center text-white font-semibold">
        <div className="flex items-center flex-col">
          <img src="./Vector.png" alt="" />
          <p>HTML</p>
          <img src="./Vector.png" alt="" />
          <p>CSS</p>
          <img src="./Vector.png" alt="" />
          <p>JavaScript</p>
        </div>
        <div className="flex items-center flex-col">
          <img src="./Vector.png" alt="" />
          <p>TailWind</p>
          <img src="./Vector.png" alt="" />
          <p>React</p>
          <img src="./Vector.png" alt="" />
          <p>TypeScript</p>
        </div>
      </section>

      <footer>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
      </footer>
    </section>
  );
}

export default App;
