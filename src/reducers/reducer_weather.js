import { FETCH_WEATHER } from "../actions/index";

//reducer is a function that returns the piece of state updated
export default function(state = [], action){
  switch (action.type) {
    case FETCH_WEATHER:
      //never modify state
      //return state.concat([ action.payload.data ]);
      return [ action.payload.data, ... state]; //payload.data is the API data
  }
  return state;
}
