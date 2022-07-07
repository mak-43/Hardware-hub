import React from 'react';
import DashboardSlider from './DashboardSlider';
import { Outlet} from 'react-router-dom'
const Dashboard = () => {
    return (
       <DashboardSlider>
        
        <Outlet/>
       </DashboardSlider>
    );
};

export default Dashboard;