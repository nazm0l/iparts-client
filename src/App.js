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
import MyOrder from "./Pages/Dashboard/MyOrder";
import AddReview from "./Pages/Dashboard/AddReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddParts from "./Pages/Dashboard/AddParts";
import AllOrders from "./Pages/Dashboard/AllOrders";
import Users from "./Pages/Dashboard/Users";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from "./Portfolio/Portfolio";
import ResetPass from "./Pages/Login/ResetPass";
import Payment from "./Pages/Dashboard/Payment";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:id" element={<RequireAuth><SinglePart /></RequireAuth>} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<AllOrders />}></Route>
          <Route path="myorder" element={<MyOrder />}></Route>
          <Route path="myorder/payment/:_id" element={<Payment />}></Route>
          <Route path="addreview" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
          <Route path="addparts" element={<AddParts />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="reset" element={<ResetPass />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
