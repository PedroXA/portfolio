import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Provider
import { PageProvider } from "./context/PageContext";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <App />
    </PageProvider>
  </StrictMode>
);
