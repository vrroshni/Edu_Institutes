import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux'


const ForInstitute = () => {
    const { user } = useSelector((state) => state.auth)

  return (
    !user?.is_institute ? <Navigate to="/restricted" /> : <Outlet />
  )
};
export default ForInstitute;