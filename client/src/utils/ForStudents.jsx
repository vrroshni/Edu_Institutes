import { Navigate, Outlet } from "react-router-dom";
import {  useSelector } from 'react-redux'


const ForStudents = () => {
    const { user } = useSelector((state) => state.auth)

  return (
    user?.is_institute ? <Navigate to="/" /> : <Outlet />
  )
};
export default ForStudents;