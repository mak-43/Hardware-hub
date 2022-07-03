
import React, { useState } from 'react';


import b1 from '../../Assets/Images/b1.jpg'
import b2 from '../../Assets/Images/b2.jpg'
import b3 from '../../Assets/Images/b3.jpg'
const Landing = () => {

    return (
        <div>
            {/* <Carousel className='w-100' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img style={{ height: '550px' }}
                        className="d-block w-100 "
                        src={b1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Outlook of Gadget Warehouse</h3>
                        <p>Anything relate to electronics you can store here</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '550px' }}
                        className="d-block w-100"
                        src={b2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Eternal look </h3>
                        <p >We protect and preserve your products by our professionals</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '550px' }}
                        className="d-block w-100"
                        src={b3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Final look </h3>
                        <p>
                            This item will be delivered soon
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full relative">
                    <img src={b1} class="w-full lg:h-2/3 md:h-full " />
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
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
                </div>
            </div>


        </div>
    );
};

export default Landing;