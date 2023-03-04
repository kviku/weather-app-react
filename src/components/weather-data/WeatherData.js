
import { useDispatch, useSelector } from "react-redux";
import { CELSIUS, FAHRENHEIT } from "../../store/actions";
import "./WeatherData.css";

function WeatherData() {
 
  

  const dispatch = useDispatch();

  const store = useSelector((state) => state);
  console.log(store);

  const handleTemp = () => {
    let radioButtons = document.getElementsByName("temp_pref");
    for (let radio of radioButtons) {
      if (radio.checked) {
        radio.value.toUpperCase() === "CELSIUS"
          ? dispatch({ type: CELSIUS })
          : dispatch({ type: FAHRENHEIT });
      }
    }
  };

  return (
    <div>
      <h1>Weather Data</h1>

      <div className="radio">
        <input
          type="radio"
          id="celsius"
          name="temp_pref"
          value="celsius"
          onChange={handleTemp}
        />
        <label htmlFor="celsius">Celsius</label>
        
        <input
          type="radio"
          id="Fahrenheit"
          name="temp_pref"
          value="Fahrenheit"
          onChange={handleTemp}
        />
        <label htmlFor="Fahrenheit">Fahrenheit</label>
      </div>

      <div className="weather_data">
        <img src={store.data.current.condition.icon} />
        <ul>
          <li>
            Location: {store.data?.location.name},{" "}
            {store.data?.location.country}
          </li>
          <li>
            Temperature:{" "}
            {store.temp_pref === "celsius"
              ? store.data?.current.temp_c
              : store.data?.current.temp_f}
            {store.temp_pref === "celsius" ? " deg C" : " deg F"}
          </li>
          <li>The weather is {store.data.current.condition.text}</li>
          <li>Humidity: {store.data.current.humidity}</li>
          <li>Pressure: {store.data.current.pressure_mb}</li>
        </ul>
      </div>
    </div>
  );
}

export default WeatherData;