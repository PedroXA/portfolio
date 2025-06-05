import { useContext } from "react";
import Icons from "../utils/Icons";
import Typewriter from "typewriter-effect";
import { pageContext } from "../context/PageContext";
import { ExperienceCard } from "../components/ExperienceCard";

export function SobreMim() {
  const experiencia = [
    {
      titulo: "Rede de Educação - Claretiano",
      cargo: "Suporte Técnico - Help Desk",
      duracao: "Out 2024 - Atualmente",
      logo: "/claretiano-logo.png",
    },
    {
      titulo: "Igreja Batista da Lagoinha",
      cargo: "Social Media",
      duracao: "Jul 2024 - Atualmente",
      logo: "/lagoinha-logo.png",
    },
    {
      titulo: "Colégio COTEMIG",
      cargo: "Monitor Técnico - Helpdesk",
      duracao: "Mai 2022 - Mai 2023",
      logo: "/cotemig-logo.png",
    },
  ];

  const { page, setPage } = useContext(pageContext);

  return (
    <section className="flex-15/20 flex-col ml-24 pr-24 mt-8 overflow-y-auto">
      {/* About me */}

      <h1 className="font-primary text-light-white text-4xl pt-28">
        Um pouquinho sobre mim
      </h1>
      <p className=" text-justify font-primary leading-7 text-gray-500">
        <ul>
          <li>
            <p>
              Quase dois anos de experiência em{" "}
              <span className="text-green-neon font-bold">Suporte Técnico</span>{" "}
              {/* Emoji Aqui */}
            </p>
          </li>
          <li>
            <p>
              Tive a oportunidade de ajudar mais de{" "}
              <span className="text-green-neon font-bold">400 alunos</span>{" "}
              iniciando os estudos em técnologia
              {/* Emoji Aqui */}
            </p>
          </li>
          <li>
            Ganhador do{" "}
            <span className="text-green-neon font-bold">
              3° Lugar do Programa COTEMIG Statups - 2021
            </span>{" "}
          </li>
          <li>Curto uns games e gosto de comer coisas novas</li>
        </ul>
      </p>

      <button
        onClick={() => {
          setPage("SobreMim");
        }}
      ></button>

      <h2 className="font-primary text-light-white text-4xl">
        A caminhada até aqui
      </h2>

      {experiencia.map((item) => {
        return <ExperienceCard key={item.titulo} item={item} />;
      })}
    </section>
  );
}
