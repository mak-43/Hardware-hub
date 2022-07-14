import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import{Navigate,useLocation,Outlet} from 'react-router-dom'
import Loading from '../Components/Loading';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import { signOut } from 'firebase/auth' 

const RequireAdmin = ({children}) => {
    const [user,loading,error]=useAuthState(auth)
    const [admin,adminLoading]=useAdmin(user)
    const location=useLocation()
    
    if(loading||adminLoading){
        return <Loading/>
    }
    if(!user||!admin){
        signOut(auth)
        localStorage.removeItem('accessToken')
        
        return <Navigate to='/login' state={{from:location}} replace />
        
    }
    
    return children
};

export default RequireAdmin;