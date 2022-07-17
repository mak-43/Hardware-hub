import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const AddProduct = ({ setAdd, refetch }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

        const image = data?.img[0]
        const formData = new FormData()
        formData.append('image', image)
        const imgStorageKey = '6d58d8deea3773d04ec3b9955d466d7f'
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const product = {
                        name: data.name,
                        img: img,
                        description: data.description,
                        minimum: data.minimum,
                        available: data.available,
                        price: data.price,

                    }
                    fetch(`https://morning-atoll-82384.herokuapp.com/addproduct`, {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('success', data)
                            toast('Product Added')

                        })

                    setAdd(null)
                    refetch()
                }
            })




    }

    return (
        <div>
            <input type="checkbox" id="addproduct" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="addproduct" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <label class="label">
                            <span class="label-text">Image</span>
                        </label>
                        <input type="file" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('img')} />


                        <input type="text" placeholder="Product Name" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('name')} />

                        <input type="text" placeholder="Product Description" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('description')} />

                        <input type="number" placeholder="Minimum Order" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('minimum')} />

                        <input type="number" placeholder="Available Quantity" class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('available')} />

                        <input type="number" placeholder="Unit Price" name='price' class="input my-2 input-bordered input-info w-full max-w-xs" required {...register('price')} />

                        <div class="modal-action">

                            <input for="addproduct" type="submit" className='btn' value='Done' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;