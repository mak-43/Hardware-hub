import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Review = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const [user] = useAuthState(auth)
    const [p,setP]=useState({})
    const email=user?.email
    useEffect(()=>{
        fetch(`https://morning-atoll-82384.herokuapp.com/pro?email=${email}`).then(res=>res.json()).then(data=>setP(data))
    },[user])
   
    const onSubmit = data => {
        
        const rev={
            photo:p[0]?.photo,
            email:email,
            name:data.name,
            review:data.review,
            rate:data.rate
        }
        console.log(rev)
        const url = `https://morning-atoll-82384.herokuapp.com/postreview`
        fetch(url, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        }).then(res => res.json())
            .then(result => {

                toast("Review Added Successfully...");
                reset();
            })
    }
    return (
        <div className='w-full h-fit flex flex-col justify-center items-center'>
            <h1 className='text-bold text-2xl my-5'>Add your review</h1>
            <div class="avatar my-5">
                <div class="w-24  rounded-full flex justify-center items-center mx-auto ">
                    <img src={p[0]?.photo? p[0]?.photo:user?.photoURL} />
                </div>
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col sm:w-full md:w-2/3 lg:w-1/2 gap-3"
            >


                <input type="text" value={p[0]?.photo} hidden placeholder="Type here" class="input input-bordered input-accent w-full " {...register("photo")}
                />
                <input type="text" value={user?.email} placeholder="Type here" class="input input-bordered input-accent w-full " {...register("email")}
                />
                <input type="text" value={user?.displayName} placeholder="Type here" class="input input-bordered input-accent w-full " {...register("name")}
                />
                <textarea required class="textarea textarea-accent" placeholder="Add Review"
                    {...register("review")}
                ></textarea>


                <input type="number" required placeholder="Enter review 0 to 5" class="input input-bordered input-accent w-full " {...register("rate", {
                    required: {
                        value: true,
                        message: 'Enter a number between 0-5'
                    },
                    min: {
                        value: 0,
                        message: `Rating can't be less than 0`
                    },
                    max: {
                        value: 5,
                        message: `Rating can't be more than 5`
                    }
                })}
                />
                <label className="label">
                    {errors.rate?.type === 'required' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}
                    {errors.rate?.type === 'min' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}
                    {errors.rate?.type === 'max' && <span className="label-text-alt text-red-500">{errors.rate.message}</span>}
                </label>



                <input
                    className="btn  mb-3 py-2 fw-bold"
                    type="submit"
                    value="Add A Review"
                />
            </form>
        </div>
    );
};

export default Review;