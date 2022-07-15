import React from 'react';
import { useQuery } from 'react-query'
import ReactStars from 'react-rating-stars-component';
import { Zoom,Fade,Rotate,Flip,Bounce,Roll } from 'react-reveal';
import Loading from '../../Components/Loading';

const ReviewCard = () => {


    const { isLoading, error, data: reviews, refetch } = useQuery('review', () => fetch('http://localhost:5000/getreview').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
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
        </div>
    );
};

export default ReviewCard;