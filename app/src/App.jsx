// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import { NavComponent } from './components/shared/NavComponent';
import { AppRoutes } from './components/AppRoutes';

export const App = () => {
  return (
    <BrowserRouter>
      <NavComponent />
      <AppRoutes />
    </BrowserRouter>
  );
};
