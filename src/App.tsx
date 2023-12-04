import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import { AuthProvider } from "./context/auth";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Closet from "./pages/Closet";
import Login from "./pages/Login";
import Random from "./pages/Random";
import InspirationPage from "./pages/InspirationPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/closet"
          element={
            <PrivateRoute>
              <Closet />
            </PrivateRoute>
          }
        />

        <Route
          path="/random"
          element={
            <PrivateRoute>
              <Random />
            </PrivateRoute>
          }
        />
        <Route
          path="/inspiration"
          element={
            <PrivateRoute>
              <InspirationPage/>
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        />

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
