import { INITIAL_STORE } from "./indexStore";
import { CELSIUS, DATA, FAHRENHEIT } from "./actions";

function reducer(state = INITIAL_STORE, action) {
  console.log({ state, action });
  switch (action.type) {
    case CELSIUS:
      return { ...state, temp_pref: "celsius" };
    case FAHRENHEIT:
      return { ...state, temp_pref: "FAHRENHEIT" };

    case DATA:
      return { ...state, data: action.data };
    default:
      return state;
  }
}

export default reducer;