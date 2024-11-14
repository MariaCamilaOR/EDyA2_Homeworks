// src/components/shared/NavComponent.jsx
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { logout } from '../../store/slices/authSlice';
import './NavComponent.css';

export const NavComponent = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const memoizedAuthStatus = useMemo(() => isAuthenticated, [isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login', { replace: true });
  };

  return (
    <nav className="nav-container">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        About
      </NavLink>
      {/* Nuevo enlace a Pokémon */}
      <NavLink to="/pokemon" className={({ isActive }) => (isActive ? 'active-link' : '')}>
        Pokémon
      </NavLink>

      {memoizedAuthStatus ? (
        <>
          <span>Bienvenido, {user?.name || user?.displayName}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/register" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <button disabled={memoizedAuthStatus}>Register</button>
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            <button disabled={memoizedAuthStatus}>Login</button>
          </NavLink>
        </>
      )}
    </nav>
  );
};
