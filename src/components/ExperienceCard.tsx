type ExperienceCardProps = {
  titulo: string;
  cargo: string;
  duracao: string;
  logo: string;
};

export function ExperienceCard({ item }: { item: ExperienceCardProps }) {
  return (
    <div
      className="flex flex-row mt-4 opacity-25 p-1.5 rounded-lg text-off-white w-3/9
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2
          
          hover:opacity-100
          [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border
          
          "
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
