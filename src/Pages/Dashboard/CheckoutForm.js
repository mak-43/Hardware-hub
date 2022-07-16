import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useEffect } from 'react';


const CheckoutForm = ({ order }) => {

    const { price, name, email, _id } = order
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [process, setProcess] = useState(false)
    const [tid, setTid] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        fetch(`https://git.heroku.com/morning-atoll-82384.git /create-payment-intent`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            })

    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setError(error?.message || '')
        setSuccess('')
        setProcess(true)
        //confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        )
        if (intentError) {
            setError(intentError.message)
            setProcess(false)

        }
        else {
            setError('')
            setTid(paymentIntent.id)
            console.log(paymentIntent)

            setSuccess('Congrats!Your payment is completed.')
            //strore payment on database 
            const payment = {
                id: _id,
                tid: paymentIntent.id
            }
            fetch(`https://git.heroku.com/morning-atoll-82384.git /payment/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcess(false)
                    console.log(data)
                })
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'><p>{success}</p>
                    <p>Your transaction id : <span className='text-orange-500 font-bold'>{tid}</span> </p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;