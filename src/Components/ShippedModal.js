import React from 'react';
import { toast } from 'react-toastify';
const ShippedModal = ({ shipped, setShipped, refetch }) => {

    const handleshipped = id => {
        fetch(`https://git.heroku.com/morning-atoll-82384.git /shipped/${id}`, {
            method: 'Put',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {

                toast.success('Order Shipped Successfully')
                setShipped(null)
                refetch()


            })
    }
    return (
        <div>


            <input type="checkbox" id="shipped" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Do you want to Shipped this order?</h3>

                    <div class="modal-action">
                        <label onClick={() => handleshipped(shipped)} for="shipped" class="btn text-cyan-400">Yes</label>
                        <label for="shipped" class="btn text-red-500">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ShippedModal;