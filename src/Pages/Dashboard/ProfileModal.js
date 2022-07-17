import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const ProfileModal = ({ user, setModal, refetch }) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data)
        //    await axios.post('https://morning-atoll-82384.herokuapp.com/updatepro',info).then(res=>{
        //     console.log(res)
        //     toast.success(`Profile updated`);
        //    })
        // const url = `https://morning-atoll-82384.herokuapp.com/updatepro`
        // fetch(url, {
        //     method: 'put',//thakle update korbe na thakle add koreb put
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('success', data)
        //         toast('Profile updated')

        //     })

        // setModal(null)
        // refetch()

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
                    const profile = {
                        email:user?.email,
                        name: data.name,
                        img: img,
                        education: data.education,
                        location: data.location,
                        phone: data.phone,
                        linkdin: data.linkdin,

                    }
                    fetch(`https://morning-atoll-82384.herokuapp.com/updatepro`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(profile)
                    })
                    .then(res => res.json())
                    .then(data => {
                            console.log('success', data)
                            toast('Profile updated')

                        })

                    setModal(null)
                    refetch()
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form action="" onSubmit={handleSubmit(onSubmit)} >
                        <input type="file" placeholder="Add Image" class="input my-2 input-bordered input-info w-full max-w-xs"
                            required {...register('img')}
                        />
                        <input type="text" placeholder="Education" class="input my-2 input-bordered input-info w-full max-w-xs"
                            required {...register('education')}
                        />
                        <input type="text" placeholder="Location" class="input my-2 input-bordered input-info w-full max-w-xs"
                            required {...register('location')}
                        />
                        <input type="number" placeholder="Phone" class="input my-2 input-bordered input-info w-full max-w-xs"
                            required {...register('phone')}
                        />
                        <input type="text" placeholder="Linkdln profile link" class="input my-2 input-bordered input-info w-full max-w-xs"
                            required {...register('linkdin')}
                        />


                        <div class="modal-action">

                            <input for="my-modal-6" type="submit" className='btn' value='Done' />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default ProfileModal;