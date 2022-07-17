import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'

import Modal from '../../Components/Modal';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const [id, setId] = useState(null)
    const navigate = useNavigate()
    const email = user?.email

    const { isLoading, error, data: orders, refetch } = useQuery('order', () => fetch(`https://morning-atoll-82384.herokuapp.com/order?email=${email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log('response', res)
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }

        return res.json()

    }))

    if (isLoading || loading) {
        return <Loading />
    }



    return (
        <div className='h-screen mt-10 w-full'>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>status</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            orders?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={o?.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{o?.pname}</td>
                                    <td>{o?.quantity} pices</td>
                                    <td>$ {o?.price}</td>
                                    <td> {
                                        (o?.price && !o?.paid) && <button onClick={() => navigate(`/payment/${o._id}`)} className='btn hover:bg-blue-300'>Pay</button>
                                    }
                                        {
                                            (o?.price && o?.paid) && <div>
                                                <p><span className='text-success'>Paid</span> </p>
                                                <p>Transaction id: <span className='text-success'>{o?.tid}</span></p>
                                            </div>
                                        }</td>
                                    <td>
                                        {
                                            (o?.paid && o?.shipped) && <p className='font-bold text-pink-800'>Shipped</p>
                                        }
                                        {
                                            (!o?.shipped && o?.paid) && <p className='text-violet-800 '>Pending</p>
                                        }

                                    </td>

                                    <td>    {
                                        !o?.paid && <label onClick={() => setId(`${o?._id}`)} for="delete-modal" class=" cursor-pointer text-red-500 text-xl"><i class="fa-solid fa-delete-left mt-6 ml-5"></i></label>
                                    }</td>


                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                id && <Modal id={id} setId={setId} refetch={refetch} ></Modal>
            }
        </div>
    );
};

export default MyOrders;