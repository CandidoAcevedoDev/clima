import { useState, createContext } from "react";
import { getWeather, getLatLon } from "../services/api";

const ClimaContext = createContext();

const ClimaProvider = ({ children }) => {
  const [search, setSearch] = useState({
    ciudad: "",
    pais: "",
  });

  const [clima, setClima] = useState({});
  const [loading, setLoading] = useState(false);

  const datosBusqueda = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const consultarClima = async (values) => {
    setLoading(true);

    const result = await getWeather(values);
    const { lat, lon } = result[0];

    const resultLatLon = await getLatLon(lat, lon);
    setClima(resultLatLon);

    setLoading(false);
  };

  return (
    <ClimaContext.Provider
      value={{ search, clima, loading, datosBusqueda, consultarClima }}
    >
      {children}
    </ClimaContext.Provider>
  );
};

export { ClimaProvider };

export default ClimaContext;
