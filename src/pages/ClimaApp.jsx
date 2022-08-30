import useClima from "../hooks/useClima";
import Formulario from "../components/forms/Formulario";
import Result from "../components/Result";
import Spinner from "../components/spinner/Spinner";

const ClimaApp = () => {
  const { clima, loading } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {loading ? <Spinner /> : clima?.name && <Result />}
      </main>
    </>
  );
};

export default ClimaApp;
