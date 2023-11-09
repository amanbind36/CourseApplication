import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from "react-router-dom";
import CourseDetails from './components/Details';
import CourseList from './components/List';
import StudentDashboard from './components/Dashboard';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <header className="App-header">

      </header>
      <Routes>
        <Route path="/"  element={<CourseList/>} />
        <Route path="/course" element={<CourseDetails/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
