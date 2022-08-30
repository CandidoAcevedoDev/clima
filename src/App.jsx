import ClimaApp from "./pages/ClimaApp";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <ClimaApp />
    </ClimaProvider>
  );
}

export default App;
