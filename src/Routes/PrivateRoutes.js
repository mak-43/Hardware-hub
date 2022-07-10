import Dashboard from "../Pages/Dashboard/Dashboard";
import Payment from "../Pages/Dashboard/Payment";
import Purchase from "../Pages/Purchase";

export const PrivateRoutes=[
    
    
    {path:'/tools/:id' , name:'Purchase',Component:Purchase},
    {path:'/payment/:id' , name:'Payment',Component:Payment},
 
  ] 