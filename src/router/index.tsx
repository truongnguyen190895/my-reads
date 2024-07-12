import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "../context/auth";
import { BookProvider } from "../context/bookContext";
import { Home, Login, Search } from "../pages";

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
        <BookProvider>
          <ProtectedRoute />
        </BookProvider>
      </AuthProvider>
    ),
    children: [
      { element: <Home />, index: true },
      { path: "/search", element: <Search /> },
    ],
  },
]);
