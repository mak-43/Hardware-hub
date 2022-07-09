import React, { useEffect, useRef, useState } from 'react';
import { Link ,useNavigate,useLocation} from 'react-router-dom'
import auth from '../firebase.init';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Components/Loading';
import { toast } from 'react-toastify';
import useToken from '../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [nuser, nloading, nerror] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail, sending, perror] = useSendPasswordResetEmail(
        auth
      );
    const[email,setEmail]=useState()
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setEmail(data.email)
        signInWithEmailAndPassword(data.email,data.password)
       
    };
    
    const [token]=useToken(user||guser||nuser)
    const navigate= useNavigate()
    const location = useLocation()
    let signInError;
    
    let from =location.state?.from?.pathname|| '/'
    useEffect(()=>{
        if (token) {
            console.log(user)
            navigate(from,{replace:true})
        }
    },[token,from,navigate])
    if(gloading||loading||nloading){
        return <Loading></Loading>
    }


    
  
    if(gerror||error||perror){
        signInError= <p className='text-red-500'><small>{error?.message||gerror?.message||perror?.message}</small></p>
    }

    console.log(email)
    const resetPassword = async ( ) => {
        
        
        if (user) {
        await sendPasswordResetEmail(user);
            toast('Sent email');
            
        }
        else {
            toast('Please enter your email')
          
        }
    }
   
    return (
        <div>
            <div className='flex justify-center bg-accent items-center h-screen'>


                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body  ">
                        <h1 className='text-3xl text-center '>Login to continue</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            
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
                            
                            <input className='btn btn-primary w-full max-w-xs  text-white' type="submit" value="Login" />
                        </form>
                        <p>New to this site ? <Link to='/signup' className='text-cyan-400'><small>Sign Up</small></Link>  </p>
                        <p>Forget Password ? <Link to='' 
                         onClick= {resetPassword}
                        className='text-cyan-400'><small>Reset Password</small></Link> </p>
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