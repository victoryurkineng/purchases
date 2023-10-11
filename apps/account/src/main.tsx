import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@idme/i18n';
import Router from './pages/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
