
import Carousel from 'nuka-carousel';
import React, { useState } from 'react';


import b1 from '../../Assets/Images/b1.jpg'
import b2 from '../../Assets/Images/b2.jpg'
import b3 from '../../Assets/Images/b3.jpg'
import b4 from '../../Assets/Images/b4.jpg'


const Landing = () => {


    return (
        <div className=''>

            {/* <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={b1} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={b2} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={b4} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> */}

            <Carousel
             
              
             infiniteLoop={true}
             autoplay={true}
             autoplayReverse={true}
             autoplayInterva={3000}
             adaptiveHeight={true}
             style={{height:'400px'}}
        
      
            >
                <div      >
                    <img className='object-contain'   src={b4} />
                    <p className="legend text-center">All types of Hardware are availabe</p>
                </div>
                <div>
                    <img src={b3} />
                    <p className="legend text-center">We ensure the quality</p>
                </div>
                <div>
                    <img src={b1} />
                    <p className="legend text-center">Latest prettiest </p>
                </div>
                <div>
                    <img src={b2} />
                    <p className="legend text-center">Latest prettiest </p>
                </div>
            </Carousel>


            {/* <div class="carousel w-full ">
                <div id="item1" class="carousel-item w-full relative">
                    <img src={b1} class="w-full  md:h-full " />
                    <div class="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item4" class="btn btn-circle">❮</a>
                            <a href="#item2" class="btn btn-circle">❯</a>
                        </div>
                        <h1 className=' flex justify-center  bottom-0  md:text-2xl lg:text-3xl font-bold text-emerald-900 '>All kinds of Hardware are availabe

                        </h1>
                    </div>

                </div>
                <div id="item2" class="carousel-item w-full relative">
                    <img src={b3} class="w-full lg:h-2/3 md:h-full" />
                    <div class="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item1" class="btn btn-circle">❮</a>
                            <a href="#item3" class="btn btn-circle">❯</a>
                        </div>
                        <h1 className=' flex justify-center  bottom-0  md:text-2xl lg:text-3xl font-bold text-white'>All products are intake </h1>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full relative">
                    <img src={b2} class="w-full lg:h-2/3 md:h-full" />
                    <div class="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item2" class="btn btn-circle">❮</a>
                            <a href="#item4" class="btn btn-circle">❯</a>
                        </div>
                        <h1 className=' flex justify-center  bottom-0  md:text-2xl lg:text-3xl font-bold text-yellow-600'>Latest Pretest products</h1>
                    </div>
                </div>
                <div id="item4" class="carousel-item w-full relative">
                    <img src={b2} class="w-full lg:h-2/3 md:h-full" />
                    <div class="absolute  transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#item3" class="btn btn-circle">❮</a>
                            <a href="#item1" class="btn btn-circle">❯</a>
                        </div>
                        <h1 className=' flex justify-center  bottom-0  md:text-2xl lg:text-3xl font-bold text-rose-700'>Ashun Boshun eidike shob theke beshi luv</h1>
                    </div>
                </div>

            </div>
            <div class="flex justify-center  w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div> */}

        </div>
    );
};

export default Landing;