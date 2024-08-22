import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
    <GoogleOAuthProvider clientId="444192265905-u28o7g4viupjv9vanhtmbroolr8epj8l.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>;
    </>
)