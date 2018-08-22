import axios from "axios";

const API_KEY="a74b46b1d9d3f6b425cb77fe1d2dfb97";
const ROOT_URL="http://api.openweathermap.org/data/2.5/forecast?appid=" + API_KEY;


//action type
export const FETCH_WEATHER= "FETCH_WEATHER";

//action creator
export function fetchWeather(city){
  const url = ROOT_URL + "&q=" + city + ",mx";
  const request = axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload: request
  };
}
