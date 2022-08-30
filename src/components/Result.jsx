import useClima from "../hooks/useClima";

const Result = () => {
  const { clima } = useClima();

  const { name, main } = clima;

  return (
    <div className="contenedor clima">
      <h2>El Clima de {name} es: </h2>

      <p>
        {(main.temp - 273.15).toFixed(2)} <span>&#x2103;</span>
      </p>

      <div className="temp_min_max">
        <p>
          Máx: {(main.temp_max - 273.15).toFixed(2)} <span>&#x2103;</span>
        </p>

        <p>
          Mín: {(main.temp_min - 273.15).toFixed(2)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};

export default Result;
