import Navbar from "./Components/Navbar";
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from "./Routes/publicRoutes";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./Authentication/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { PrivateRoutes } from "./Routes/PrivateRoutes";

function App() {


  return (
    <>
      <Navbar>
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
         

        </Routes>
      </Navbar>
      <Footer />
      <ToastContainer />

    </>
  );
}

export default App;
