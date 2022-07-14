import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import axios from 'axios'
import { toast } from 'react-toastify';

const AddAdmin = () => {
    const [user, loading] = useAuthState(auth);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://desolate-bayou-39842.herokuapp.com/user`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const makeAdmin = (name, email) => {
        fetch(`https://desolate-bayou-39842.herokuapp.com/user/admin/${email}`, {
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

                                    <td>{
                                        o?.role !== 'admin' ? <button onClick={() => makeAdmin(o?.name, o?.email)} className='btn btn-small '>Make Admin</button> :
                                            <p ><small className='text-centerfont-semibold text-blue-700'>Admin</small></p>
                                    }</td>

                                    <td><button className='text-red-500 text-xl '><i class="fa-solid fa-delete-left  "></i></button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
    refetch()
};

export default AddAdmin;