import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Navbar from "./Pages/Shared/Navbar";
import Shop from "./Pages/Shop/Shop";
import Dashboard from "./Pages/Dashboard/Dashboard"
import NotFound from "./Pages/Shared/NotFound";
import RequireAuth from "./Pages/Login/RequireAuth";
import Footer from "./Pages/Shared/Footer";
import SinglePart from "./Pages/Shop/SinglePart";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<RequireAuth><Shop /></RequireAuth>} />
        <Route path="shop/:id" element={<RequireAuth><SinglePart /></RequireAuth>} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
