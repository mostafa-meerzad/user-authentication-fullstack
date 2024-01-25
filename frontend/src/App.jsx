import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>

        <nav>
        <Link to="/">home</Link>
        <br />
        <Link to="about">about</Link>
        <br />
        <Link to="login">login</Link>
        <br />
        <Link to="somewhere else">somewhere else</Link>
      </nav>
      </Router>
    </div>
  );
};
export default App;
