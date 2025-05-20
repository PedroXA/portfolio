export function Contato() {
  return (
    <section className="flex flex-col items-center justify-center flex-15/20 ml-24 pr-24 overflow-y-auto">
      <div className="p-16  rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center font-primary">
          💬 Entre em Contato
        </h2>

        <p className="text-center text-lg max-w-xl mb-8 font-segundary">
          Tem alguma ideia ou proposta? Me manda uma mensagem!
        </p>

        <form action="" method="post" className="flex flex-col">
          <label htmlFor="">Nome</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Seu nome"
            className="p-3 bg-gray-500 mb-5"
          />

          <label htmlFor="">E-mail</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Seu e-mail"
            className="p-3 bg-gray-500"
          />

          <label htmlFor="">Mensagem</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            className="resize-none"
          ></textarea>
        </form>
      </div>

      <a
        href="/curriculo.pdf"
        download
        className="bg-lime-primary text-gray-900 font-bold p-4 mt-5 w-2/8 rounded-4xl hover:bg-gray-900 hover:text-lime-primary transition duration-300 ease-in-out cursor-pointer flex items-center justify-center font-segundary"
      >
        📄 Baixar Currículo
      </a>
    </section>
  );
}
