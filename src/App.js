import "./App.css";
import ProjectsPage from "./components/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./home/HomePage";
import Form from "./components/Member";

function App() {
  return (
    <BrowserRouter>
      <header className="sticky">
        <span className="logo">
          <img src="./logo.jpg" alt="logo" width={"80"} height={"80"} />
        </span>
        <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink>
        <NavLink to="/Member" className="button rounded">
          Join as member
        </NavLink>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/Member" element={<Form />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
