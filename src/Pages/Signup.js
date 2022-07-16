import React from 'react';
import { Link ,useNavigate} from 'react-router-dom'
import auth from '../firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Components/Loading';
import useToken from '../hooks/useToken';


const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, uerror] = useUpdateProfile(auth);
      const [token]=useToken(user||guser||fuser)
    const navigate=useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit =async data => {
        console.log(data)
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({displayName:data.name})
      
    };
    if (gloading || loading||updating||floading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/')
       
    }
    let signInError;
    if (gerror || error||uerror) {
        signInError = <p className='text-red-500'><small>{error?.message || gerror?.message||uerror?.message||ferror?.message}</small></p>
    }

    return (
        <div>
            <div className='flex justify-center bg-accent items-center h-screen '>


                <div class="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body  ">
                        <h1 className='text-3xl text-center my-5'>Sign Up to continue</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                   
                                })}
                            />
                             <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                             
                            </label>

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


                            {signInError}

                            <input className='btn btn-primary w-full max-w-xs  text-white' type="submit" value="Sign up" />
                        </form>
                        <p>Already have an account ? <Link to='/login' className='text-cyan-400'><small>Login</small></Link>  </p>

                        <div class="divider">OR</div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn btn-glass hover:btn-accent'>Continue with Google</button>
                        {/* <button className='btn btn-glass hover:btn-accent'>Continue with Github</button> */}
                        {/* <button onClick={() => signInWithFacebook()} className='btn btn-glass hover:btn-accent'>Continue with Facebook</button>  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;