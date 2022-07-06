import React from 'react';
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <div>
            <div className='flex justify-center bg-accent items-center h-screen'>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                    <div class="card-body ">
                    <h1 className='text-3xl text-center '>Signup to continue</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Sign up</button>
                        </div>
                        <p>New to this site ? <Link to='/login'>Login</Link>  </p>
                        <p>Forget Password ? <Link to=''>Reset Password</Link> </p>
                        <div class="divider">OR</div>
                        <button className='btn btn-glass hover:btn-accent'>Continue with Google</button>
                        <button className='btn btn-glass hover:btn-accent'>Continue with Github</button>
                        <button className='btn btn-glass hover:btn-accent'>Continue with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;