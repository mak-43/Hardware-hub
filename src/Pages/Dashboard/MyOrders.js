import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    const { isLoading, error, data: orders, refetch } = useQuery('modal', () => fetch(`https://desolate-bayou-39842.herokuapp.com/order?email=${user?.email}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    refetch()
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
                                    <td><button onClick={() => navigate(`/payment/${o._id}`)} className='btn hover:bg-blue-300'>Pay</button></td>
                                    <td><button className='text-red-500 text-xl'><i class="fa-solid fa-delete-left "></i></button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;