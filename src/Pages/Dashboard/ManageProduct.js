import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import { useNavigate } from 'react-router-dom'
import ProductModal from '../../Components/ProductModal';
import AddProduct from '../../Components/AddProduct';

const ManageProduct = () => {
    const [id, setId] = useState(null)
    const [add, setAdd] = useState(null)
    const navigate = useNavigate()

    const { isLoading, error, data: products, refetch } = useQuery('products', () => fetch(`https://morning-atoll-82384.herokuapp.com/tools`).then(res => {

        return res.json()

    }))
    if (isLoading) {
        return <Loading />
    }

    return (
        <div onClick={() => setAdd(1)} className='h-screen mt-20 w-full'>
            <label for="addproduct" class="btn flex justify-center items-center lg:w-1/4 md:w-1/3  sm:w-full mx-auto text-xl my-5">Add Product</label>


            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            products?.map((o, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td><div class="avatar">
                                        <div class="mask mask-squircle w-12 h-12">
                                            <img src={o?.img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div></td>
                                    <td>{o?.name}</td>
                                    <td>{o?.description}</td>
                                    <td>{o?.minimum}</td>
                                    <td>{o?.available}</td>
                                    <td>$ {o?.price}</td>


                                    <label onClick={() => setId(`${o?._id}`)} for="product-modal" class=" cursor-pointer text-red-500 text-xl"><i class="fa-solid fa-delete-left mt-6 ml-5"></i></label>


                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
            {
                id && <ProductModal id={id} setId={setId} refetch={refetch} ></ProductModal>
            }
            {
                add && <AddProduct add={add} setAdd={setAdd} refetch={refetch}> </AddProduct>
            }
        </div>
    );
};

export default ManageProduct;