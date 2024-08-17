import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './components/shared/AppStyle';
import './index.css'; 

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
