import logo from './logo.svg';
import './App.css';
import HomepageSidebar from './components/homepageSidebar';
import Loginform from './components/login';
import Registrationform from './components/registration';
import Navbar from './components/navbar';
import Profilepage from './components/profile';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  const location = useLocation();
  return (
    <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
