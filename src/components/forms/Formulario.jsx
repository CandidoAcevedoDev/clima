import { useState } from "react";
import useClima from "../../hooks/useClima";

const Formulario = () => {
  const { search, datosBusqueda, consultarClima } = useClima();
  const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    consultarClima(search);
    setAlert("");
  };

  return (
    <div className="contenedor">
      {alert && <p>{alert}</p>}

      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            name="ciudad"
            id="ciudad"
            value={search.ciudad}
            onChange={datosBusqueda}
            placeholder="Ciudad"
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select
            name="pais"
            id="pais"
            value={search.pais}
            onChange={datosBusqueda}
          >
            <option>-- Seleccione un País --</option>
            <option value="DOP">República Dominicana</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="CO">Colombia</option>
            <option value="ES">España</option>
          </select>
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Formulario;
