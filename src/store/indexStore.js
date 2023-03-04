import { createStore } from "redux";

import reducer from "./reducer";

export const INITIAL_STORE = {
    temp_pref : 'celsius'
}

export const store = createStore(reducer, INITIAL_STORE)
