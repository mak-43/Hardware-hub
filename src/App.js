import Navbar from "./Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from "./Routes/publicRoutes";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Authentication/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { PrivateRoutes } from "./Routes/PrivateRoutes";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import Profile from "./Pages/Dashboard/Profile";
import ManageOrder from "./Pages/Dashboard/ManageOrder";

import ManageProduct from "./Pages/Dashboard/ManageProduct";
import Review from "./Pages/Dashboard/Review";
import MyOrders from "./Pages/Dashboard/MyOrders";
import RequireAdmin from "./Authentication/RequireAdmin";

function App() {


  return (
    <>
      <Navbar >
        <Routes>
          {/* <Route path="/" element={  <Home />}></Route>
          <Route path="/tools" element={    <Tools/>}></Route>
          <Route path="/dashboard" element={   <Dashboard/>}></Route>
          <Route path="/portfolio" element={   <Portfolio/>}></Route>
          <Route path="/contact" element={         <Contact/>}></Route>
          <Route path="/login" element={    <Login/>}></Route> */}

          {publicRoutes.map(({ path, Component }, index) =>
            <Route key={index} path={path} element={<Component />} />)}


          <Route element={<PrivateRoute />}>

            {PrivateRoutes.map(({ path, Component }, index) =>
            <Route key={index} path={path} element={<Component />} />)}
          </Route> 
         
         <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="profile" element={<Profile/>}/>
                <Route path="review" element={<Review/>}/>
                <Route path="orders" element={<MyOrders/>}/>
                
                <Route path="admin" element={<RequireAdmin><AddAdmin/></RequireAdmin>}/>
                <Route path="manage" element={<RequireAdmin><ManageOrder/></RequireAdmin>}/>
                <Route path="products" element={<RequireAdmin><ManageProduct/></RequireAdmin>}/>
               
            </Route>
         </Route>

        </Routes>
      </Navbar>
     
      <ToastContainer />

    </>
  );
}

export default App;
