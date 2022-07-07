import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';
const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [modal,setModal]=useState(null)
    console.log(user)
    return (
        <div>
            <div>

                <h1 className='text-2xl my-5 font-serif font-bold'>Welcome to your profile</h1>

                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body ">
                        <div class="avatar ">
                            <div class="w-12 mx-auto my-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h2 class="card-title">{user?.displayName}</h2>
                        <p>{user?.email}</p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <label onClick={()=>setModal(user)} for="my-modal-6" class="btn modal-button btn btn-primary">update profile</label>
                        
                    </div>
                </div>
                {
                    modal && <ProfileModal></ProfileModal>
                }
            </div>
        </div>
    );
};

export default Profile;