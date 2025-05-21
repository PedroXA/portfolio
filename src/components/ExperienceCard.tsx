type ExperienceCardProps = {
  titulo: string;
  cargo: string;
  duracao: string;
  logo: string;
};

export function ExperienceCard({ item }: { item: ExperienceCardProps }) {
  return (
    <div
      className="flex flex-row mt-4 bg-dark-blue p-1.5 rounded-lg text-off-white w-3/5
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2"
    >
      <figure className="mr-5 overflow-hidden rounded-2xl">
        <img src={item.logo} alt="logo-claretiano" className="h-24" />
      </figure>
      <address>
        <h1 className="font-primary text-light-white">{item.titulo}</h1>
        <p className="font-primary text-light-white">{item.cargo}</p>
        <p className="font-primary text-light-white">{item.duracao}</p>
        <p className="text-green-neon underline font-primary">
          {/* Clique para saber mais... */}
        </p>
      </address>
    </div>
  );
}
