import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import AddClientReducer from "./AddClientReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  form: formReducer,
  client : AddClientReducer
});

export const configureStore = () => createStore(rootReducer, composeWithDevTools());