import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ id, refetch, setId }) => {

    const handleDelete = id => {
        fetch(`https://desolate-bayou-39842.herokuapp.com/order/${id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(data => {

                toast.success('Order deleted')
                setId(null)
                refetch()
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Do you want to delete?</h3>

                    <div class="modal-action">
                        <label onClick={() => handleDelete(id)} for="delete-modal" class="btn">Yes</label>
                        <label for="delete-modal" class="btn ">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;