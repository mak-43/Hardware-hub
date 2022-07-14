import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [modal, setModal] = useState(null)

    const { email } = user?.email

    const { isLoading, error, data: pro, refetch } = useQuery('modal', () => fetch(`https://desolate-bayou-39842.herokuapp.com/userpro?email=${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }


    //   const {education,location,phone,linkdin}=pro[0]
   
    return (
        <div>
            <div>

                <h1 className='text-2xl my-5 font-serif font-bold text-center'>Welcome to your profile</h1>

                <div class="card w-96 bg-base-100 shadow-xl">

                    <div class="card-body ">
                        <div class="avatar ">
                            <div class="w-12 mx-auto my-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <h2 class="card-title">{user?.displayName}</h2>
                        <p><i class="fa-solid fa-envelope mr-2"></i>{user?.email}</p>
                        <p><i class="fa-solid fa-graduation-cap"></i> {pro[0]?.education}</p>
                        <p><i class="fa-solid fa-location-dot"></i> {pro[0]?.location}</p>
                        <p><i class="fa-brands fa-linkedin"></i> {pro[0]?.linkdin}</p>
                        <p><i class="fa-solid fa-phone mb-4"></i> {pro[0]?.phone}</p>

                        <label onClick={() => setModal(user)} for="my-modal-6" class="btn modal-button btn btn-primary">update profile</label>

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