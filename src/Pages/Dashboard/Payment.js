import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';

const Payment = () => {
    const { id } = useParams()
    const { isLoading, error, data: order, refetch } = useQuery('modal', () => fetch(`https://desolate-bayou-39842.herokuapp.com/payment/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    refetch()
    return (
        <div>

            <h1 className='text-center text-3xl my-10 font-mono'>Order Details And Payment</h1>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 '>
                <div className='flex justify-center items-center'>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={order?.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Recipient Name: {order?.name}</h2>
                            <p>Recipient Email: {order?.email}</p>
                            <p>Product Name: {order?.pname}</p>
                            <p>Product Quantity: {order?.quantity} pices</p>
                            <p>Total Price: ${order?.price}</p>
                            <p>Delivery Address: {order?.address}</p>
                            <p>Recipient Number: {order?.phone}</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    master card
                </div>
            </div>
        </div>
    );
};

export default Payment;