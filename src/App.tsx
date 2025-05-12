import Sidebar from "./components/Sidebar";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <section className="flex flex-col ">
      <Sidebar />

      {/* <p className="text-gray-100 text-justify m-5 font-segundary">
        Desenvolvedor <b>front-end</b> com um ano de experiência na prototipação
        e criação de aplicações web. Atualmente trabalho com as técnologias{" "}
        <b>React</b>, <b>Next</b>, <b>NodeJS</b> e <b>TailWind CSS</b>.
      </p> */}

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
