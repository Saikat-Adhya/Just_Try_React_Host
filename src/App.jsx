import "./App.css";
import MovieList from "./components/MovieList";
import MoviePage from "./components/MoviePage";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import { useState, useEffect } from "react";

// Protected route wrapper
const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  return (
    <>
      <div className="maini">
        <h1>Movie Search App</h1>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/ok"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MoviePage />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<MovieList />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
