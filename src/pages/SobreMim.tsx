import { useContext } from "react";
import Icons from "../utils/Icons";
import Typewriter from "typewriter-effect";
import { pageContext } from "../context/PageContext";

export function SobreMim() {
  const { page, setPage } = useContext(pageContext);

  return (
    <section className="flex-15/20 flex-col ml-24 pr-24 mt-8 overflow-y-auto">
      {/* Tittle */}

      <h1 className="text-4xl font-bold font-primar text-center mb-10 flex flex-row items-center justify-center">
        <Typewriter
          options={{
            strings: ["Seja bem-vindo(a) ao meu Portfólio!", "Hello World!"],
            autoStart: true,
            loop: true,
            delay: 100,
            deleteSpeed: 30,
          }}
        />
        <picture className="">
          <source
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif"
            alt="👋"
            width="32"
            height="32"
          />
        </picture>
      </h1>

      {/* About me */}
      {/* Procurar saber como deixar isso aqui mais organizado */}

      <p className=" text-justify font-segundary leading-7 bg-gray-900 text-white p-5 rounded-lg">
        Desde 2022, entrei na área da tecnologia como{" "}
        <span className="text-lime-primary font-bold">Suporte Técnico</span>,
        venho explorando esse mundo vasto dentro do ecossistema tanto de{" "}
        <span className="text-lime-primary font-bold">UX/UI</span>, quanto de
        <span className="text-lime-primary font-bold">
          {" "}
          desenvolvimento Front-end
        </span>
        . Atualmente venho prestando servições para a Rede de Educação -
        Claretiano, atuando como suporte para a área de{" "}
        <span className="text-lime-primary font-bold">
          redes de computadores
        </span>{" "}
        e <span className="text-lime-primary font-bold">help desk</span>. Quando
        não estou na frente de um computador, eu posso estar tocando bateria,
        caminhando ou pensando sobre alguma coisa nova que eu posso estar
        fazendo.
      </p>

      {/* Adicionar algumas animações extras no button para deixar ele bem a cara de um dev front-end */}
      <button
        onClick={() => {
          setPage("SobreMim");
        }}
        className="bg-lime-primary text-gray-900 font-bold p-4 mt-5 w-2/8 rounded-4xl hover:bg-gray-900 hover:text-lime-primary transition duration-300 ease-in-out cursor-pointer flex items-center justify-center"
      >
        Visualizar Curriculo
      </button>

      {/* Experiência */}
      {/* Adicionar animações extras no card de experiência */}
      {/* Adicionar Icons nos cards para deixar mais amigável */}
      {/* Fazer um modal quando clicar no card de experiencia */}

      <h2 className="text-4xl text-gray-900 font-bold font-primary text-start mt-5">
        Experiência
      </h2>

      <div className="flex flex-col mt-5">
        <div
          className="flex flex-row mt-2 bg-gray-900 p-5 rounded-lg text-off-white w-3/5
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2"
        >
          <figure className="mr-5 overflow-hidden rounded-lg">
            <img
              src="./claretiano-logo.png"
              alt="logo-claretiano"
              className="h-24"
            />
          </figure>
          <address>
            <h1 className="font-primary">Claretiano - Rede de Educação</h1>
            <p className="font-segundary">Suporte Técnico - Helpdesk</p>
            <p className="font-segundary">out 2024 - Presente</p>
            <p className="text-lime-primary underline">
              Clique para saber mais...
            </p>
          </address>
        </div>

        <div
          className="flex flex-row mt-4 bg-gray-900 p-6 rounded-lg text-off-white w-3/5
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2"
        >
          <figure className="mr-5 overflow-hidden rounded-lg">
            <img
              src="./lagoinha-logo.png"
              alt="logo-lagoinha"
              className="h-24"
            />
          </figure>
          <address>
            <h1 className="font-primary">Igreja Batista da Lagoinha</h1>
            <p className="font-segundary">Social Media</p>
            <p className="font-segundary">jul 2024 - presente</p>
            <p className="text-lime-primary underline">
              Clique para saber mais...
            </p>
          </address>
        </div>

        <div
          className="flex flex-row mt-4 bg-gray-900 p-6 rounded-lg text-off-white w-3/5
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2"
        >
          <figure className="mr-5 overflow-hidden rounded-lg">
            <img
              src="./cotemig-logo.png"
              alt="logo-claretiano"
              className="h-24"
            />
          </figure>
          <address>
            <h1 className="font-primary">COTEMIG</h1>
            <p className="font-segundary">Monitor Técnico - Helpdesk</p>
            <p className="font-segundary">mai 2022 - mai 2023</p>
            <p className="text-lime-primary underline">
              Clique para saber mais...
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
