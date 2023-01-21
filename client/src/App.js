import { Routes, Route } from 'react-router-dom'
import Login from './components/accounts/Login';
import PrivateRoute from './utils/PrivateRoute';
import { Toaster } from "react-hot-toast";
import SignUp from './components/accounts/SignUp';
import InstituteHome from './components/home/InstituteHome';
import StudentsHome from './components/home/StudentsHome';
import UserProfile from './components/profiles/UserProfile';
import InstitutionProfile from './components/profiles/institution/InstitutionProfile';
import Description from './components/institutes/Description';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { updateToken, logout } from './redux/slices/auth'
import { useEffect, useState } from 'react';
import Restricted from './pages/Restricted';
import ForInstitute from './utils/ForInstitute';
import NotFound from './pages/NotFound';
// import ForStudents from './utils/ForStudents';

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
      console.log(data, 'kkkkkkkkkkkkk')
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

  }, [authtokens, loading]);




  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>

            <Route path='/' element={<StudentsHome />} />
            <Route path='/profile' element={<UserProfile />} />
            <Route path='/description' element={<Description />} />

          <Route element={<ForInstitute />}>
            <Route path='/details' element={<InstitutionProfile />} />
            {/* <Route path='/institutes' element={<InstituteHome />} /> */}
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
