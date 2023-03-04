import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { CELSIUS, DATA, FAHRENHEIT } from "../../store/actions";
import api from "../../api";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const client = axios.create({
    baseURL: `https://api.weatherapi.com/v1`,
  });
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  
  let search;

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleClick = () => {
    if (!city) {
      setError(true);
    } else {
      setError(false);
      search = city;

     
      search = search.trim();

      
      search = search.replaceAll(" ", "+");
      client
        .get(`/current.json?key=${api.apiKey}&q=${search}`)
        .then((res) => {
          console.log(res.data);
          dispatch({ type: DATA, data: res.data });
          navigate(`/weather/${search}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return(
  
    <div>
      <h1>Weather Api</h1>
      <div className="input_body">
        <input className="searchbox"
          type="text"
          placeholder="Location"
          value={city}
          onChange={handleChange}
        />
        
        <button onClick={handleClick}>Search</button>
      </div>
      {error && <p className="error">Please enter a valid city name</p>}
    </div>
  );
}

export default Home;