import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // todo: authenticate the user
  const isAuthenticated = localStorage.getItem("test-token");
// todo: if authorized render the nested routes content otherwise redirect the user to Login page
  return isAuthenticated ? <Outlet /> : <Navigate to={"/login"} />;
};
export default PrivateRoute;
