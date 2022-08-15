import React from "react";
import { Provider } from "react-redux";
import CartContainer from "./components/CartContainer";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <CartContainer />
        </Provider>
    );
};

export default App;
