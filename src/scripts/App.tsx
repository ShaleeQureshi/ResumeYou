import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importing css
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";

// Importing scripts
import { AuthProvider } from "./context";
import PrivateRoute from "./routes/private";
import { LandingPage, ProfilePage } from "../pages";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/profile/:email" element={<ProfilePage />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
