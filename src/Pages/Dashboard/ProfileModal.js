import React from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

const ProfileModal = ({ user, setModal, refetch }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const info = {
            email: user.email,
            education: e.target.education.value,
            location: e.target.location.value,
            phone: e.target.phone.value,
            linkdin: e.target.linkdin.value
        }
        console.log(info)

        //    await axios.post('https://git.heroku.com/morning-atoll-82384.git /updatepro',info).then(res=>{
        //     console.log(res)
        //     toast.success(`Profile updated`);
        //    })
        const url = `https://git.heroku.com/morning-atoll-82384.git /updatepro`
        fetch(url, {
            method: 'put',//thakle update korbe na thakle add koreb put
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                toast('Profile updated')

            })

        setModal(null)
        refetch()

    }


    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>


                    <form action="" onSubmit={handleSubmit} >
                        <input type="text" placeholder="Education" name='education' class="input my-2 input-bordered input-info w-full max-w-xs" />
                        <input type="text" placeholder="Location" name='location' class="input my-2 input-bordered input-info w-full max-w-xs" />
                        <input type="number" placeholder="Phone" name='phone' class="input my-2 input-bordered input-info w-full max-w-xs" />
                        <input type="text" placeholder="LinkdIn profile link" name='linkdin' class="input my-2 input-bordered input-info w-full max-w-xs" />

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