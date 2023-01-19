import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux'


const PrivateRoute = () => {
    const { user } = useSelector((state) => state.auth)

  return (
    !user ? <Navigate to="/login" /> : <Outlet />
  )
};
export default PrivateRoute;