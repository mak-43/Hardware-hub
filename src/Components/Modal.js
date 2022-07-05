import React, { useState } from 'react';

const Modal = () => {
    const [temp,setTemp]=useState(null)
    return (
        <div>

            

            
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">ok</label>
                        <label for="my-modal-6" onClick={()=>setTemp(1)} class="btn modal-button bg-base-300">Buy now</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;