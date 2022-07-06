import React, { useEffect, useState ,} from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';


import axios from 'axios'
const Purchase = () => {

    const [q, setQ] = useState()
    const [p,setP]=useState()
    const { id } = useParams()
   
    const handleSubmit =async e => {
       e.preventDefault()
       const inputData={
        name:e.target.user.value,
        email:e.target.email.value,
        quantity:e.target.quantity.value,
        price:e.target.price.value,
        address:e.target.address.value,
        phone:e.target.phone.value
       }

           await axios.post("http://localhost:5000/order",inputData).then((res) =>{ console.log(res)
           toast.success(`Order placed`);
        });
        console.log(inputData)
       
       
        e.target.quantity.value=' '
        e.target.price.value=' '
        e.target.address.value=' '
        e.target.phone.value=' '       

        setQ()
        setP()
    };

    const { isLoading, error, data: product } = useQuery('tools', () => fetch(`http://localhost:5000/tools/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    const handleQuantity = e => {
        e.preventDefault();

        const mini = parseInt(product?.minimum)
        const max = parseInt(product?.available)
        const inputQuantity = parseInt(e.target?.quantity?.value)
        console.log( mini, max,inputQuantity,  q,p)
      
        if(inputQuantity>0){
            if (inputQuantity > max) {
                toast.error(`We dont have enough quantity Stock: ${max}`);
    
            } else if (inputQuantity < mini) {
                toast.error(`Minimum order quantity is ${mini}`);
    
            } else {
    
                setQ(inputQuantity)
                setP(inputQuantity*product?.price)
    
            }
            e.target.quantity.value = ' ';
            console.log(mini, max,inputQuantity,  q,p)
            
        }  
        else{
            toast.error(`Quantity can't be less than 1 or negative`);
        } 

    }



    return (
        <div>
            purchase : {product.length}
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl mx-2 mx-auto p-2">
                    <figure><img style={{ height: '300px', width: '100%' }} className='rounded' src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p><span>Price: </span>{product.price}</p>
                        <p><span>Stock: </span>{product.available}</p>
                        <form onSubmit={handleQuantity}>
                            <input  type="number" placeholder="Add Quantity " name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                                required=""
                            />
                            <button type='submit' className=" text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Proceed</button>
                        </form>


                    </div>
                </div>
                <div>
                    <div class="card  bg-slate-500 shadow-xl">
                        
                        <div class="card-body ">
                            <h2 class="card-title">Order Quantity: {q}</h2>
                            <form className='mx-auto' onSubmit={handleSubmit}>
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text" name='user' placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                                <label class="label">
                                    <span class="label-text">Email Address</span>
                                </label>
                                <input type="text"  placeholder="Type here" class="input input-bordered w-full max-w-xs" name='email' />

                                <label class="label">
                                    <span class="label-text">Quantity</span>
                                </label>
                                <input placeholder="Type here" class="input input-bordered w-full max-w-xs"   type="text" disabled value={q} name='quantity' />

                                <label class="label">
                                    <span class="label-text">Total Price</span>
                                </label>
                                <input   placeholder="Type here" class="input input-bordered w-full max-w-xs"  type="text" name='price' disabled value={p} />

                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input placeholder="Type here" class="input input-bordered w-full max-w-xs" type="text" name='address' />

                                <label class="label">
                                    <span class="label-text">Contact Number</span>
                                </label>
                                <input placeholder="Type here" class="input input-bordered w-full max-w-xs" type="text" name='phone' />

                                <input 
                                disabled={q?'':'true'}
                                class="btn btn-primary" type="submit" />
                            </form>

                           
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;