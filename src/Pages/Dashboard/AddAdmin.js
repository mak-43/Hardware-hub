import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import axios from 'axios'
import { toast } from 'react-toastify';
import { useState } from 'react';
import UserModal from '../../Components/UserModal';

const AddAdmin = () => {
    const [user, loading] = useAuthState(auth);
    const [duser, setDuser] = useState(null)
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://git.heroku.com/morning-atoll-82384.git /user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const makeAdmin = (name, email) => {
        fetch(`https://git.heroku.com/morning-atoll-82384.git /user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearere ${localStorage.getItem('accessToken')}`
            }
        })
            .then((res) => {
                if (res.status === 403 || res.status === 401) {
                    toast.error('Failed to Make an admin')
                }
                return res.json()

            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success(`${name} is now Admin`);
                    refetch()
                }
            })
    }
    return (
        <div className='h-screen mt-10 w-full'>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Avater</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Role </th>
                            <th>Remove </th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            users?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={o?.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{o?.name}</td>
                                    <td>{o?.email}</td>

                                    <td>
                                        {
                                            o?.master && <p className='text-green-600 font-bold'>Root </p>
                                        }
                                        {
                                            o?.role !== 'admin' ? <button onClick={() => makeAdmin(o?.name, o?.email)} className='btn btn-small '>Make Admin</button> :
                                                <p ><small className='text-centerfont-semibold text-blue-700'>Admin</small></p>
                                        }

                                    </td>

                                    <td>{
                                        !o?.master && <label onClick={() => setDuser(`${o?._id}`)} for="user-modal" class=" cursor-pointer text-red-500 text-xl"><i class="fa-solid fa-delete-left mt-6 ml-5"></i></label>
                                    }</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                duser && <UserModal duser={duser} refetch={refetch} setDuser={setDuser}></UserModal>
            }
        </div>
    );

};

export default AddAdmin;