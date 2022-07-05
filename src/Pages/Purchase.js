import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';
const Purchase = () => {
    // const [product, setProduct] = useState([])
    const [q,setQ]=useState()
    const { id } = useParams()
    // useEffect(() => {
    //     fetch(`Tools.json/${id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])

    const {isLoading,error,data:product}=useQuery('tools',()=>fetch(`http://localhost:5000/tools/${id}`).then(res=>res.json()))
    if(isLoading)
    {
        return <Loading/>
    }

    const handleQuantity=e=>{
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity > 100) {
            toast.error('We dont have enough quantity');
        } else if (inputQuantity <5) {
            toast.error(`Minimum order quantity is ${5}`);
        } else {

            setQ(inputQuantity)

        }
        console.log(q)
        e.target.quantity.value = '';
        
    }
  

    return (
        <div>
            purchase : {product.length}
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div class="card w-96 bg-base-100 shadow-xl mx-2 mx-auto p-2">
                    <figure><img  style={{height:'300px',width:'100%'}}className='rounded' src={product.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{product.name}</h2>
                        <p>{product.description}</p>
                        <p><span>Price: </span>{product.price}</p>
                        <p><span>Stock: </span>{product.available}</p>
                        <form onSubmit={handleQuantity}>
                    <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered input-secondary w-full max-w-xs"
                        required=""
                    />
                    <button type='submit' className=" text-white bg-gradient-to-r from-primary to-secondary border-2 border-secondary hover:border-2 hover:border-primary hover:bg-gradient hover:from-white hover:to-white hover:text-primary transition-all transition-duration:150ms font-medium hover:font-medium px-5 py-[10px] rounded-md ml-2">Proceed</button>
                </form>


                    </div>
                </div>
                <div>
                    <div class="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
                        <div class="card-body">
                            <h2 class="card-title">Order Quantity: {q}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;