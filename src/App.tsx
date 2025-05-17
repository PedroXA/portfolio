import { useState, createContext, useContext } from "react";

// Components
import { Sidebar } from "./components/Sidebar";

// Pages
import { SobreMim } from "./pages/SobreMim";
import { Projetos } from "./pages/Projetos";
import { Stack } from "./pages/Stack";
import { Contato } from "./pages/Contato";
import { PageProvider } from "./context/PageContext";

function App() {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <PageProvider>
        <SobreMim />
      </PageProvider>
    </section>
  );
}

export default App;
