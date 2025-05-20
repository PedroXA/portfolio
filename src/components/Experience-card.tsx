export function ExperienceCard() {
  <div
    className="flex flex-row mt-4 bg-gray-900 p-6 rounded-lg text-off-white w-3/5
          ease-in-out duration-300 hover:scale-102 cursor-pointer ml-2"
  >
    <figure className="mr-5 overflow-hidden rounded-lg">
      <img src="./cotemig-logo.png" alt="logo-claretiano" className="h-24" />
    </figure>
    <address>
      <h1 className="font-primary">COTEMIG</h1>
      <p className="font-primary">Monitor Técnico - Helpdesk</p>
      <p className="font-primary">mai 2022 - mai 2023</p>
      <p className="text-lime-primary underline font-primary">
        Clique para saber mais...
      </p>
    </address>
  </div>;
}
