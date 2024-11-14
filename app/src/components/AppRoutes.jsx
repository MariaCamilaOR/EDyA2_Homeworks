// src/components/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { LoginPage, HomePage, AboutPage, RegisterPage, PokemonPage } from '../pages';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <HomePage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoutes>
            <AboutPage />
          </PrivateRoutes>
        }
      />
      <Route
        path="/pokemon"
        element={
          <PrivateRoutes>
            <PokemonPage />
          </PrivateRoutes>
        }
      />
     
    </Routes>
  );
};
