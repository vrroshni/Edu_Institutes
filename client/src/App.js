import { Routes, Route } from 'react-router-dom'
import Login from './components/accounts/Login';
import PrivateRoute from './utils/PrivateRoute';
import { Toaster } from "react-hot-toast";
import SignUp from './components/accounts/SignUp';
import InstituteHome from './components/home/InstituteHome';
import StudentsHome from './components/home/StudentsHome';
function App() {




  return (
    <div className="App">
      <Routes>
        {/* <Route element={<PrivateRoute />}> */}
        <Route path='/' element={<StudentsHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/institutes' element={<InstituteHome />} />
        {/* </Route> */}
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
