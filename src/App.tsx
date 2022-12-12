import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants";
import AuthLayout from "./layouts/auth-layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/not-found";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
