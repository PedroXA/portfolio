import Icons from "../utils/Icons";

// Sidebar component
export function Sidebar() {
  return (
    <div className="flex flex-col bg-gray-900 pl-5 pr-5 pt-5 h-screen w-1/4 text-off-white">
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
      <div className="flex flex-col text-off-white font-primary">
        <h1 className=" bg-clip-text text-lime-primary text-5xl text-center mt-10">
          PEDRO XAVIER
        </h1>
        <h3 className="font-bold text-center">DESENVOLVEDOR FRONT-END</h3>
        <p className="text-primary text-justify font-segundary">
          Crio interfaces interativas e atrativas para experiências web.
        </p>
      </div>

      {/* sidebar navigation links */}
      {/* Na versão de PC vou utilizar estados para trocar entre os componentes */}
      {/* Versão mobile vai ser um SPA maroto gerenciado por um hamburguer*/}
      <nav className="text-off-white font-segundary text-lg mt-5">
        <ul>
          <li>
            <Icons.home className="inline-block m-0.5" />
            <a href="#home">Home</a>
          </li>
          <li>
            <Icons.stack className="inline-block m-0.5" />
            <a href="#habilidades">Habilidades</a>
          </li>
          <li>
            <Icons.aboutMe className="inline-block m-0.5" />
            <a href="#sobre-mim">Sobre Mim</a>
          </li>
          <li>
            <Icons.contact className="inline-block m-0.5" />
            <a href="#contato">Contato</a>
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
