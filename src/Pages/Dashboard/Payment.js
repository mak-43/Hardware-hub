import React from 'react';
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1x9rINdMRuzrmmOATQIGakerryL5DEiZf2RLr9XXzdgwFzhtTIGk61xaQcPdwsWx1x6pzBqGR58kjx4GVmXL5F00Xo1OXy8H');

const Payment = () => {
    const { id } = useParams()
    const { isLoading, error, data: order, refetch } = useQuery(['payment', id], () => fetch(`https://desolate-bayou-39842.herokuapp.com/payment/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    refetch()
    return (
        <div>

            <h1 className='text-center text-3xl my-10 font-mono'>Order Details And Payment</h1>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div className='flex justify-center items-center'>
                    <div class="card md:w-96 sm:w-full sm:px-5 md:px-0 bg-base-100 shadow-xl">
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

                <div className='my-10 flex flex-col justify-center  md:px-10 px-5'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;