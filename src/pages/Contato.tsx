export function Contato() {
  return (
    <section className="flex flex-col items-center justify-center flex-15/20 ml-24 pr-24 overflow-y-auto">
      <div className="  rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center font-primary">
          💬 Entre em Contato
        </h2>

        <p className="text-center text-lg max-w-xl mb-8 font-segundary">
          Tem alguma ideia ou proposta? Me manda uma mensagem!
        </p>

        <form action="" method="post" className="flex flex-col">
          <label htmlFor="" className="font-segundary">
            Nome
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Seu nome"
            className="p-3 bg-gray-100 mb-2 rounded-2xl"
          />

          <label htmlFor="" className="font-segundary">
            E-mail
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Seu e-mail"
            className="p-3 bg-gray-100 mb-2 rounded-2xl"
          />

          <label htmlFor="" className="font-segundary">
            Mensagem
          </label>
          <textarea
            name=""
            id=""
            cols={20}
            rows={10}
            className="resize-none bg-gray-100 mb-2 rounded-2xl"
          ></textarea>

          <div className="flex mt-5">
            <button
              className="bg-dark-blue text-light-white font-bold p-4  w-2/8 rounded-2xl hover:bg-gray-800 hover:text-lime-primary transition duration-300 ease-in-out cursor-pointer font-segundary"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
