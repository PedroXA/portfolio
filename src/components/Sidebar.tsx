const Sidebar = () => {
  return (
    <div className="sidebar sidebar-background">
      <div className="sidebar__logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="flex flex-col text-white font-primary">
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
      <nav className="sidebar__nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Stack</a>
          </li>
          <li>
            <a href="#services">Sobre mim</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="sidebar__socials">
        {/* Importar o SVG do github, linkedIN e outra rede profissional */}
        <a href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
      </div>
    </div>
  );
};

export default Sidebar;
