import React, { useState } from 'react';
import i from '../Assets/Images/b1.jpg'
import Modal from '../Components/Modal';
import { useNavigate } from 'react-router-dom';
const ToolCard = ({ tools }) => {
    const { name, img, description, minimum, available, price,id } = tools
    const navigate = useNavigate()
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl mx-2 mx-auto p-2">
                <figure><img className='rounded' src={img} style={{height:'300px',width:'100%'}} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><span>Price: </span>{price}</p>
                    <p><span>Stock: </span>{available}</p>

                    <button onClick={() => navigate(`/purchase/${id}`)} className='btn btn-primary'>Buy now</button>


                </div>
            </div>

        </div>
    );
};

export default ToolCard;