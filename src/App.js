import './App.css';
import Home from './screeens/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './screeens/Login';
import Signup from './screeens/Signup';
import ProtectedRoutes from './protectedRoutes/ProtectedRoutes';
import AdminDashboard from './components/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/dashboard" element={<AdminDashboard />}/>
            <Route path="/" element={<Home/>} exact />
          </Route>
        </Routes>
      </div>
    
    </Router>
  );
}

export default App;
