import Icons from "../utils/Icons";
import { pageContext } from "../context/PageContext";
import { useContext } from "react";

// Sidebar component
export function Sidebar() {
  // Usando os botões para setar a página que eu quero renderizar e mandar para o meu pageContext
  const { setPage } = useContext(pageContext);

  return (
    <div className="flex flex-col bg-gray-900 pl-5 pr-5 pt-5 h-screen w-1/4 text-off-white">
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
      <div className="flex flex-col text-off-white font-primary">
        <h1 className=" bg-clip-text text-lime-primary text-5xl text-center mt-10">
          PEDRO XAVIER
        </h1>
        <h3 className="font-bold text-center">DESENVOLVEDOR FRONT-END</h3>
        <p className="text-primary text-justify font-segundary">
          Crio interfaces interativas e atrativas para experiências web.
        </p>
      </div>

      {/* Sidebar navigation links */}
      <nav className="text-off-white font-segundary text-lg mt-5">
        <ul>
          <li>
            <Icons.home className="inline-block m-0.5" />
            <button
              className="cursor-pointer"
              onClick={() => setPage("SobreMim")}
            >
              Home
            </button>
          </li>
          <li>
            <Icons.stack className="inline-block m-0.5" />
            <button className="cursor-pointer" onClick={() => setPage("Stack")}>
              Stack
            </button>
          </li>
          <li>
            <Icons.aboutMe className="inline-block m-0.5" />
            <button
              className="cursor-pointer"
              onClick={() => setPage("Projetos")}
            >
              Projetos
            </button>
          </li>
          <li>
            <Icons.contact className="inline-block m-0.5" />
            <button
              className="cursor-pointer"
              onClick={() => setPage("Contato")}
            >
              Contato
            </button>
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
        <a href="#"></a>
      </div>
    </div>
  );
}
