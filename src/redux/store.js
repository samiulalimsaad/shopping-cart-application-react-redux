import { applyMiddleware, createStore } from "redux";
import cartReducer from "./cartReducer";
import { validator } from "./middlewares/validator";

const store = createStore(cartReducer, applyMiddleware(validator));

export default store;
