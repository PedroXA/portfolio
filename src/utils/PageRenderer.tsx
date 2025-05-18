import { useContext } from "react";
import { pageContext } from "../context/PageContext";
import { SobreMim } from "../pages/SobreMim";
import { Projetos } from "../pages/Projetos";
import { Stack } from "../pages/Stack";
import { Contato } from "../pages/Contato";

export function PageRenderer() {
  const { page } = useContext(pageContext);

  switch (page) {
    case "SobreMim":
      return <SobreMim />;
    case "Stack":
      return <Stack />;
    case "Projetos":
      return <Projetos />;
    case "Contato":
      return <Contato />;
    default:
      return <SobreMim />;
  }
}
