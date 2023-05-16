import { createStore } from "redux";
import { combineReducers } from "redux";

// Define the initial state
const initialState = {
  themeMode: localStorage.getItem("themeMode")
    ? JSON.parse(localStorage.getItem("themeMode"))
    : false, // false for dark mode, true for light mode
};

// Define a reducer to handle theme mode state changes
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME_MODE": {
      const newThemeMode = !state.themeMode;
      localStorage.setItem("themeMode", JSON.stringify(newThemeMode));
      return {
        ...state,
        themeMode: newThemeMode,
      };
    }
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  theme: themeReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;
