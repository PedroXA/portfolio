import { useState, createContext } from "react";

interface PageContextType {
  page: "SobreMim" | "Stack";
  setPage: React.Dispatch<React.SetStateAction<"SobreMim" | "Stack">>;
}

export const pageContext = createContext<PageContextType>({
  page: "SobreMim",
  setPage: () => {
    return;
  },
});

export const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState<"SobreMim" | "Stack">("Stack");

  return (
    <pageContext.Provider value={{ page, setPage }}>
      {children}
    </pageContext.Provider>
  );
};
