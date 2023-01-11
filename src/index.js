import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './states';
import './styles/style.css';
const root = createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <BrowserRouter>
    <React.StrictMode>
            <App/>
    </React.StrictMode>
    </BrowserRouter>
</Provider>
);
