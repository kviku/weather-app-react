
import {Routes, Route} from 'react-router-dom'

import './App.css';
import Home from './components/home/Home';
import WeatherData from './components/weather-data/WeatherData';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/weather/:city' element={<WeatherData />} />
    </Routes>
  );
}

export default App;
