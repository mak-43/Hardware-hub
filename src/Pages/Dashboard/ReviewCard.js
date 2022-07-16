import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query'
import ReactStars from 'react-rating-stars-component';
import { Zoom,Fade,Rotate,Flip,Bounce,Roll } from 'react-reveal';
import Loading from '../../Components/Loading';
import './ReviewCard.css'

const ReviewCard = () => {

    const [pageCount,setPageCount]=useState(0)
    const [page,setPage]=useState(0)
    const [size,setSize]=useState(6)
    useEffect(()=>{
        fetch('http://localhost:5000/count')
        .then(res=>res.json())
        .then(data=>{
            const count=data.count
            const pages=Math.ceil(count/size)
            setPageCount(pages)
        })
    },[page,size])

    const { isLoading, error, data: reviews, refetch } = useQuery(['review',page,size], () => fetch(`http://localhost:5000/getreview?page=${page}&size=${size}`).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }

    console.log('size',size ,'page',page)
    return (
        <div className='my-10'>
            <h1 className=' text-center my-5 text-3xl '>Client Reviews </h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    reviews.map(r => <div class="card mx-auto w-96 bg-base-100 shadow-xl">

                        <div class="card-body flex flex-col justify-center items-center">

                            <div class="avatar">

                                <div class="w-24 rounded-full">
                                    <Zoom>
                                        <img src={r.photo} />
                                    </Zoom>
                                </div>

                            </div>

                            <h2 class="card-title "><Fade left>{r.name}</Fade></h2>
                            <p>Review: <small>{r.review}</small></p>
                            <Fade bottom><p className='flex gap-2 justify-center items-center'>Ratings: {r.rate}<Bounce><ReactStars value={r.rate} activeColor="#1bbb70" /></Bounce>  </p></Fade>
                           
                                
                            



                        </div>
                    </div>)
                }

            </div>
            <div className='text-center my-10 pagination'>
                {
                 [...Array(pageCount).keys()].map(n=> <button 
                    
                    className= {page===n?  'btn btn-xs mx-2 selected': 'btn btn-xs mx-2 '}
                 onClick={()=>setPage(n)}
                 >{n}</button>)

                }
                <select  onChange={e=>setSize(e.target.value)}>
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="4">4</option>
                    <option value="6" >6</option>
                    <option value="12">12</option>
                </select>
            </div>
        </div>
    );
};

export default ReviewCard;