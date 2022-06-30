import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createServer } from 'miragejs';
import './styles/global.scss';

createServer({
  routes() {
     this.namespace = 'api';

     this.get('/transaction', () => {
      return [
        {
          id: 9999
        }
      ]
     })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);