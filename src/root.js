import React from 'react';
import {Provider} from 'react-redux';
import getStore from "./store/configStore";
import App from "./App";

const store=getStore();
const Root = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

export default Root;
