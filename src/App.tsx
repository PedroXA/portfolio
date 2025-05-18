// Components
import { Sidebar } from "./components/Sidebar";

import { PageRenderer } from "./utils/PageRenderer";

function App() {
  return (
    <section className="flex h-screen">
      <Sidebar />
      <PageRenderer />
    </section>
  );
}

export default App;
