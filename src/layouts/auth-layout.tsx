import { Outlet } from "react-router";

const AuthLayout = ({ children }: any) => {
  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
