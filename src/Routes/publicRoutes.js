import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Portfolio from "../Pages/Portfolio";
import Tools from "../Pages/Tools";

 export const publicRoutes=[
    {path:'/' , name:'Home',Component:Home},
    {path:'/tools' , name:'Tools',Component:Tools},
    {path:'/dashboard' , name:'Dashboard',Component:Dashboard},
    {path:'/porfolio' , name:'Portfolio',Component:Portfolio},
    {path:'/contact' , name:'Contact',Component:Contact},
    {path:'/login' , name:'Login',Component:Login},
  ] 