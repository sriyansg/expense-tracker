import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GoogleOAuthProvider clientId="181539491399-q5muuvv2afk949bhl9r2t7np4bicjs5b.apps.googleusercontent.com">
    <GlobalStyle />
    <GlobalProvider>
      <App />
    </GlobalProvider>
    </GoogleOAuthProvider>;
  </React.StrictMode>
);

