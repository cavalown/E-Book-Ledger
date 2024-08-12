import "./App.scss";
import { Link, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Home = () => (
  <div>
    <h2>Home Page</h2>
    <Button variant="contained" color="primary">
      <HomeIcon />
      Home
    </Button>
  </div>
);

const About = () => <h2>About Page</h2>;

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
