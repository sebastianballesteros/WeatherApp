import { combineReducers } from 'redux';
import WeatherReducer from "./reducer_weather";

const rootReducer = combineReducers({
  //weather is just a function
  weather: WeatherReducer
});

export default rootReducer;
