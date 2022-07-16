import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom'
import Footer from '../../Components/Footer';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
const DashboardSlider = ({ children }) => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center h-screen">
                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay "></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                    {/* <!-- Sidebar content here --> */}

                    {
                        admin ? <>
                            <li><NavLink to='profile'>Profile</NavLink></li>
                            <li><NavLink to='admin'>Make Admin</NavLink></li>
                            <li><NavLink to='manage'>Manage All Oders</NavLink></li>
                            <li><NavLink to='products'>Manage All Products</NavLink></li>
                        </> :
                            <>
                                <li><NavLink to='profile'>Profile</NavLink></li>
                                <li><NavLink to='orders'>My Orders</NavLink></li>

                                <li><NavLink to='review'>Add A Review</NavLink></li>
                            </>
                    }

                </ul>

            </div>
          
        </div>
    );
};

export default DashboardSlider;