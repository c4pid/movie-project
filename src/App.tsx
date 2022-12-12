import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants";
import ContentLayout from "./layouts/content-layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home";
import NotFound from "./pages/not-found";
import AuthRoute from "./routes/auth-route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to={ROUTES.HOME} replace />} />
        <Route element={<AuthRoute />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTER} element={<Register />} />
        </Route>
        <Route element={<ContentLayout />}>
          <Route path={ROUTES.HOME} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
