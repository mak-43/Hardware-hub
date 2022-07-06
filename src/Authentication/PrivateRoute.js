import React from 'react';
import{Navigate,useLocation,Outlet} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const location=useLocation()
    const user=true
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace />
    }
    
    return <Outlet/>
};

export default PrivateRoute;