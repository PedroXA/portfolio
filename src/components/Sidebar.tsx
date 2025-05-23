import Icons from "../utils/Icons";
import { pageContext } from "../context/PageContext";
import { useContext } from "react";

// Sidebar component
export function Sidebar() {
  // Usando os botões para setar a página que eu quero renderizar e mandar para o meu pageContext
  const { setPage } = useContext(pageContext);

  return (
    <div className="flex flex-col bg-dark-blue pl-5 pr-5 pt-5 h-screen w-1/4 text-off-white">
      {/* Sidebar React Icon */}
      <div className="flex flex-col items-center">
        <video
          id="logo-video"
          autoPlay
          muted
          playsInline
          loop
          disablePictureInPicture
          className="w-20"
        >
          <source src="./react-animation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Sidebar tittle */}
      <div className="flex flex-col text-off-white">
        <h1 className="bg-clip-text text-green-neon text-5xl text-center mt-10 font-primary">
          PEDRO XAVIER
        </h1>
        <h3 className="font-bold text-light-white text-center">
          DESENVOLVEDOR FRONT-END
        </h3>
        <p className="text-primary text-justify text-light-white">
          Crio interfaces interativas e atrativas para experiências web.
        </p>
      </div>

      {/* Sidebar navigation links */}
      <nav className="text-light-gray font-segundary text-2x2 mt-5 font-medium">
        <ul>
          <li>
            <Icons.home className="inline-block m-0.5" />
            <button
              className="cursor-pointer hover:text-green-neon duration-600 ease-in-out"
              onClick={() => setPage("SobreMim")}
            >
              Home
            </button>
          </li>
          <li>
            <Icons.stack className="inline-block m-0.5" />
            <button
              className="cursor-pointer hover:text-green-neon duration-600 ease-in-out"
              onClick={() => setPage("Stack")}
            >
              Stack
            </button>
          </li>
          <li>
            <Icons.aboutMe className="inline-block m-0.5" />
            <button
              className="cursor-pointer hover:text-green-neon duration-600 ease-in-out"
              onClick={() => setPage("Projetos")}
            >
              Projetos
            </button>
          </li>
          <li>
            <Icons.contact className="inline-block m-0.5" />
            <button
              className="cursor-pointer hover:text-green-neon duration-600 ease-in-out"
              onClick={() => setPage("Contato")}
            >
              Contato
            </button>
          </li>
          <li>
            <Icons.curriculum className="inline-block m-0.5" />
            <a
              href="/Curriculo-Pedro-Henrique-dos-reis.pdf"
              download
              className="text-light-gray w-2/8 hover:text-green-neon transition duration-300 ease-in-out cursor-pointer font-segundary text-center"
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>

      {/* sidebar social media links*/}
      <div className="sidebar__socials flex flex-row justify-center items-center gap-2 mt-auto">
        <a href="#">
          <Icons.linkedin className="inline-block" />
        </a>
        <a href="#">
          <Icons.github className="inline-block" />
        </a>
      </div>
    </div>
  );
}
