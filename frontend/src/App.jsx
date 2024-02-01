import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./pages/PrivateRoute";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <nav>
        <Link to="/">home</Link>
        <br />
        <Link to="about">about</Link>
        <br />
        <Link to="login">login</Link>
        <br />
        <Link to="signup">signup</Link>
        <br />
        <Link to="dashboard">dashboard</Link>
        <br />
        <Link to="somewhere else">somewhere else</Link>
      </nav>
      </Router>
    </div>
  );
};
export default App;
