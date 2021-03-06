import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import Modal from '../../Components/Modal';
import ShippedModal from '../../Components/ShippedModal';

const ManageOrder = () => {
    const [id, setId] = useState(null)
    const [shipped, setShipped] = useState(null)

    const navigate = useNavigate()
    const { isLoading, error, data: orders, refetch } = useQuery('orderss', () => fetch(`https://morning-atoll-82384.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        refetch()

        return res.json()


    }))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='h-screen  mt-20  w-full'>
            <div class="overflow-x-auto">
                <table class="table w-full ">

                    <thead className='mt-10'>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
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


                                    <td>
                                        {
                                            (o?.price && !o?.paid) && <button onClick={() => navigate(`/payment/${o._id}`)} className='btn   hover:bg-blue-300  '>Pay </button>
                                        }
                                        {
                                            (o?.price && o?.paid) && <div className='flex flex-col'>
                                                <p><span className='text-success'>Paid</span> </p>
                                                <p>T id: <span className='text-success'>{o?.tid}</span></p>
                                            </div>
                                        }
                                    </td>
                                    <td>
                                        {
                                            (o?.price && !o?.paid) && <p className='   text-red-600  '>unpaid </p>
                                        }
                                        {
                                            (!o.shipped && o?.price && o?.paid) && <div className='flex flex-col gap-2'>

                                                <p className=' '>Pending</p>


                                                <label onClick={() => setShipped(`${o?._id}`)}
                                                    for="shipped" class="btn modal-button text-blue-600">Shipped ?</label>

                                            </div>
                                        }
                                        {
                                            o?.shipped && <p className='text-green-600 font-bold '>SHIPPED</p>
                                        }
                                    </td>
                                    <td>
                                        {
                                            !o?.paid && <label onClick={() => setId(`${o?._id}`)} for="delete-modal" class=" cursor-pointer text-red-500 text-xl"><i class="fa-solid fa-delete-left mt-6 ml-5"></i></label>
                                        }
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                id && <Modal id={id} setId={setId} refetch={refetch} ></Modal>
            }
            {
                shipped && <ShippedModal shipped={shipped} setShipped={setShipped} refetch={refetch}></ShippedModal>
            }
        </div>
    );
};

export default ManageOrder;