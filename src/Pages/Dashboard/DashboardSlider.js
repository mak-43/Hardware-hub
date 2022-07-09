import React from 'react';
import { NavLink } from 'react-router-dom'
const DashboardSlider = ({children}) => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}

                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='profile'>Profile</NavLink></li>
                    <li><NavLink to='orders'>My Orders</NavLink></li>
                  
                    <li><NavLink to='review'>Add A Review</NavLink></li>
                    <li><NavLink to='admin'>Make Admin</NavLink></li>
                    <li><NavLink to='manage'>Manage All Oders</NavLink></li>
                    <li><NavLink to='users'>All Users</NavLink></li>
                    <li><NavLink to='products'>Manage Products</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashboardSlider;