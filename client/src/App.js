import { Routes, Route } from 'react-router-dom'
import Login from './components/accounts/Login';
import PrivateRoute from './utils/PrivateRoute';
import { Toaster } from "react-hot-toast";
import SignUp from './components/accounts/SignUp';
import InstituteHome from './components/home/InstituteHome';
import StudentsHome from './components/home/StudentsHome';
import UserProfile from './components/profiles/UserProfile';
import InstitutionDetails from './components/profiles/institution/InstitutionDetails';
import Description from './components/institutes/Description';
function App() {




  return (
    <div className="App">
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route path='/' element={<StudentsHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/institutes' element={<InstituteHome />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/description' element={<Description />} />
        
        {/* </Route> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
