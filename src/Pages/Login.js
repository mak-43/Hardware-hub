import React from 'react';
import { Link } from 'react-router-dom'
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user)
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className='flex justify-center bg-accent items-center h-screen'>


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body  ">
                        <h1 className='text-3xl text-center '>Login to continue</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>

                           
                            <input className='btn w-full max-w-xs bg-primary text-white' type="submit" value="Login" />
                        </form>
                        <p>New to this site ? <Link to='/signup'>Sign Up</Link>  </p>
                        <p>Forget Password ? <Link to=''>Reset Password</Link> </p>
                        <div class="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn btn-glass hover:btn-accent'>Continue with Google</button>
                        <button className='btn btn-glass hover:btn-accent'>Continue with Github</button>
                        <button className='btn btn-glass hover:btn-accent'>Continue with Facebook</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;