import { useContext } from "react";
import Icons from "../utils/Icons";
import Typewriter from "typewriter-effect";
import { pageContext } from "../context/PageContext";
import { ExperienceCard } from "../components/Experience-card";

export function SobreMim() {
  const { page, setPage } = useContext(pageContext);

  return (
    <section className="flex-15/20 flex-col ml-24 pr-24 mt-8 overflow-y-auto">
      {/* Tittle */}

      <h1 className="text-4xl font-bold font-segundary text-center mb-10 flex flex-row items-center justify-center">
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

      <p className=" text-justify font-primary leading-7 bg-dark-blue text-white p-5 rounded-lg">
        Desde 2022, entrei na área da tecnologia como{" "}
        <span className="text-green-neon font-bold">Suporte Técnico</span>,
        venho explorando esse mundo vasto dentro do ecossistema tanto de{" "}
        <span className="text-green-neon font-bold">UX/UI</span>, quanto de
        <span className="text-green-neon font-bold">
          {" "}
          desenvolvimento Front-end
        </span>
        . Atualmente venho prestando servições para a Rede de Educação -
        Claretiano, atuando como suporte para a área de{" "}
        <span className="text-green-neon font-bold">
          redes de computadores
        </span>{" "}
        e <span className="text-green-neon font-bold">help desk</span>. Quando
        não estou na frente de um computador, eu posso estar tocando bateria,
        caminhando ou pensando sobre alguma coisa nova que eu posso estar
        fazendo.
      </p>

      <button
        onClick={() => {
          setPage("SobreMim");
        }}
      ></button>

      <h2 className="text-4xl text-dark-blue font-bold font-segundary text-start mt-5">
        Experiência
      </h2>

      <ExperienceCard />
    </section>
  );
}
