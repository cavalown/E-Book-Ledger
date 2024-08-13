import "./App.scss";
import { Link, Outlet } from "react-router-dom";
import AppRoutes from "./router";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/platform">Platform</Link>
        <Link to="/enter">Login</Link>
      </nav>
      <AppRoutes></AppRoutes>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
