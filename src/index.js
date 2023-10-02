import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchContextProvider } from "../src/context/searchBottomContext";

/*======================================*/
/*======================================*/
/*======================================*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);


