import logo from './logo.svg';
import './App.css';
import HomepageSidebar from './components/homepageSidebar';
import Loginform from './components/login';
import Registrationform from './components/registration';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';
import Landpage from './pages/LandingPage';
import LoginAs from './pages/LoginAs';
import Profilepage from './pages/Profilepage';
// import FullTable from './components/table/index';

function App() {
  const location = useLocation();
  return (
    <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/loginas" element={<LoginAs />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profilepage />} />
          {/* <Route path="/table" element={<FullTable />} /> */}

    </Routes>
  );
}

export default App;
