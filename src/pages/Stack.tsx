import Icons from "../utils/Icons";

export function Stack() {
  return (
    <section className="flex-15/20 ml-24 pr-24 mt-8 overflow-y-auto">
      <div className="bg-dark-blue rounded-3xl m-8 p-6">
        <p className="font-primary text-center text-light-gray">
          Uma sessão das tecnologias que eu trabalho e que estou estudando
        </p>
        <div className="flex h-24 justify-center mt-10 gap-20">
          <Icons.html className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.css className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.javascript className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
        </div>

        <div className="flex h-24 justify-center mt-10 gap-20">
          <Icons.react className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.tailwind className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.typescript className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
        </div>

        <div className="flex h-24 justify-center mt-10 gap-20">
          <Icons.webpack className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.vite className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
          <Icons.babel className=" rounded-3xl ease-in-out duration-600 hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
