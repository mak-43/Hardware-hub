import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UserModal = ({ duser, refetch, setDuser }) => {

    const handleproduct = id => {
        fetch(`https://morning-atoll-82384.herokuapp.com/duser/${id}`, {
            method: 'Delete',
        }).then(res => res.json())
            .then(data => {

                toast.success('User Deleted')

                setDuser(null)
                refetch()
            })
    }
    return (
        <div>
            <input type="checkbox" id="user-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">

                    <h3 class="font-bold text-lg">Do you want to Delete This Product?</h3>

                    <div class="modal-action">
                        <label onClick={() => handleproduct(duser)} for="user-modal" class="btn">Yes</label>
                        <label for="user-modal" class="btn ">No</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default UserModal;