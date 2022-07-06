import Contact from "../Pages/Contact";

import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Portfolio from "../Pages/Portfolio";
import Purchase from "../Pages/Purchase";
import Signup from "../Pages/Signup";
import Tools from "../Pages/Tools";

 export const publicRoutes=[
    {path:'/' , name:'Home',Component:Home},
    {path:'/tools' , name:'Tools',Component:Tools},
   
    {path:'/porfolio' , name:'Portfolio',Component:Portfolio},
    {path:'/contact' , name:'Contact',Component:Contact},
    {path:'/login' , name:'Login',Component:Login},
    {path:'/signup' , name:'Login',Component:Signup},
 
  ] 