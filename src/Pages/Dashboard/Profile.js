import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [modal,setModal]=useState(null)

    const {isLoading,error,data:pro,refetch}=useQuery('modal',()=>fetch('http://localhost:5000/userpro').then(res=>res.json()))
    if(isLoading)
    {
        return <Loading/>
    }
  const {education,location,phone,linkdin}=pro[0]
   console.log(pro)
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
                        <p><i class="fa-solid fa-envelope mr-2"></i>{user?.email}</p>
                        <p><i class="fa-solid fa-graduation-cap"></i> {education}</p>
                        <p><i class="fa-solid fa-location-dot"></i> {location}</p>
                        <p><i class="fa-brands fa-linkedin"></i> {linkdin}</p>
                        <p><i class="fa-solid fa-phone"></i> {phone}</p>
                        
                        <label onClick={()=>setModal(user)} for="my-modal-6" class="btn modal-button btn btn-primary">update profile</label>
                        
                    </div>
                </div>
                {
                    modal && <ProfileModal refetch={refetch} user={user} setModal={setModal}></ProfileModal>
                }
            </div>
        </div>
    );
};

export default Profile;