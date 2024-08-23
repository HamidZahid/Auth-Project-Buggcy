import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <GoogleOAuthProvider clientId="444192265905-qgbvousaummi1bberfd5iq9dqdd0q1uf.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>;
    </>
)