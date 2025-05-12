import Icons from "../utils/Icons";

const SobreMim = () => {
  return (
    <>
      <h4 className="font-primary text-white font-bold text-center">
        HABILIDADES
      </h4>
      <section className="flex justify-center gap-10  text-center text-white font-semibold">
        <div className="flex items-center flex-col">
          <Icons.html />
          <p>HTML</p>
          <Icons.css />
          <p>CSS</p>
          <Icons.javascript />
          <p>JavaScript</p>
        </div>
        <div className="flex items-center flex-col">
          <Icons.tailwind />
          <p>TailWind</p>
          <Icons.react />
          <p>React</p>
          <Icons.typescript />
          <p>TypeScript</p>
        </div>
      </section>
    </>
  );
};
export default SobreMim;
