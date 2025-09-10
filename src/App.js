import RegisterForm from "./Components/register";
import Upload from "./Components/upload"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/login'; // Make sure this path is correct
import Test from './Components/test'
import FilePage from "./Components/FilePage";
import ModernActionIcons from "./Components/Icons"
const drawerWidth = 240;


export default function Layout() {
  return (
    <>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/upload" element={<Upload />} />

        {/* other routes */}
      </Routes>
      
      

    </>
  );
}
