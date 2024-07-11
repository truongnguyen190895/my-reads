import { createBrowserRouter, Outlet, Navigate } from "react-router-dom";
import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { AuthProvider, useAuth } from "../context/auth";

const ProtectedRoute = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoute = () => {
  const { user } = useAuth();
  return user ? <Navigate to="/" /> : <Outlet />;
};

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthProvider>
        <PublicRoute />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoute />
      </AuthProvider>
    ),
    children: [{ element: <Home />, index: true }],
  },
]);
