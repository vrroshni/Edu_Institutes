import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { updateToken, logout } from './redux/slices/auth'
import { useEffect, useState } from 'react';
import Home from './components/home/StudentsHome'
import Login from './components/accounts/Login';
import PrivateRoute from './utils/PrivateRoute';
import SignUp from './components/accounts/SignUp';
import Restricted from './pages/Restricted';
import ForInstitute from './utils/ForInstitute';
import NotFound from './pages/NotFound';


// codesplitting
const UserProfile = lazy(() => import("./components/profiles/UserProfile"))
const InstitutionProfile = lazy(() => import("./components/profiles/institution/InstitutionProfile"))
const Description = lazy(() => import("./components/institutes/Description"))
const SideBarWrapper = lazy(() => import("./components/elements/SideBarWrapper"))





function App() {
  const [loading, setLoading] = useState(true);
  const { user, authtokens } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const Navigate = useNavigate()


  const logoutUser = () => {
    dispatch(logout())
    Navigate('/login')
  }

  let updateTokens = async () => {
    try {
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }

      let { data } = await axios.post("user/api/token/refresh/", {
        'refresh': authtokens?.refresh,
      }, config);
      dispatch(updateToken(data))
      localStorage.setItem("authTokens", JSON.stringify(data));

    } catch (err) {
      logoutUser();
    }
    if (loading) {
      setLoading(false)
    }

  };



  useEffect(() => {
    if (user) {
      if (loading) {
        updateTokens()
      }
      let fourminutes = 1000 * 60 * 1440;
      let interval = setInterval(() => {
        if (authtokens) {
          updateTokens();
        }
      }, fourminutes);
      return () => clearInterval(interval);
    }

  }, [authtokens]);




  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<SideBarWrapper />}>
            <Route element={<PrivateRoute />}>
              <Route index element={<Home />} />
              <Route path='profile' element={<UserProfile />} />
              <Route path='description' element={<Description />} />

              <Route element={<ForInstitute />}>
                <Route path='details' element={<InstitutionProfile />} />
              </Route>
            </Route>
          </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/restricted' element={<Restricted />} />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
