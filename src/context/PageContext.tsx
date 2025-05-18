import { useState, createContext } from "react";

//Tipando o contexto (Fazendo o uso do TypeScript)
interface PageContextType {
  page: "Projetos" | "SobreMim" | "Stack" | "Contato";
  setPage: React.Dispatch<
    React.SetStateAction<"Projetos" | "SobreMim" | "Stack" | "Contato">
  >;
}

// Contexto do componente renderizado na minha tela
export const pageContext = createContext<PageContextType>({
  page: "SobreMim",
  // função fake só pra tipagem não quebrar
  setPage: () => {
    return;
  },
});

// Children é o meu componente que eu vou renderizar
export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<
    "Projetos" | "SobreMim" | "Stack" | "Contato" // estado page só pode ser um desses valores exatos
  >("SobreMim"); // Estado do componente - Página por default -> SobreMim

  return (
    <pageContext.Provider value={{ page, setPage }}>
      {children}
    </pageContext.Provider>
  );
};
