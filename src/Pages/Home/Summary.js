import React from 'react';
import CountUp from 'react-countup';
const Summary = () => {
    return (
        <div className='my-5'>
            <div className='my-4'> <h2>Millions Business Trust Us </h2>
                <h4>Try to Understand Users Expectation</h4>
                <div className='flex justify-center items-center mx-auto gap-5 w-1/2 '>
                    <hr className='text-accent  w-1/2 ' /> <hr className='text-primary  w-1/3 ' /> <hr className='text-secondary  w-1/4' />
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 my-5 items-center justify-center'>
                <div className='flex flex-col'>
                    <i class="fa-solid fa-flag text-5xl m-3"></i>
              
                        <div class="stat">
                            <div class="stat-value">
                                <CountUp className="" duration="10" end={72} />
                            </div>
                        </div>
                    <p className='text-accent  text-xl'>Countries</p>
                </div>
                <div>
                    <i class="fa-solid fa-clipboard-list text-5xl m-3"></i>
                    <div class="stat">
                            <div class="stat-value">
                                <CountUp className="" duration="10" end={350} />+
                            </div>
                        </div>
                    <p className='text-accent  text-xl'>Completed Projects</p>
                </div>
                <div>
                    <i class="fa-solid fa-people-group text-5xl m-3"></i>
                    <div class="stat-value">
                                <CountUp className="" duration="10" end={273} />+
                            </div>
                    <p className='text-accent  text-xl'>Happy Clients</p>
                </div>
                <div>
                    <i class="fa-solid fa-thumbs-up text-5xl m-3"></i>
                    <div class="stat-value">
                                <CountUp className="" duration="10" end={432} />+
                            </div>
                    <p className='text-accent  text-xl'>Feedbacks</p>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-2'>
                <div> <h4>Have any question about us or get a products request?</h4>
                    <p>Don't hesitate to contact us </p>
                </div>
                <div className='flex gap-3 justify-center' >
                    <button className='btn btn-active btn-accent text-white'>Request For Quote</button>
                    <button className='btn btn-active btn-primary'>Contact Us</button>
                </div>
            </div>
            {/* <div>
                <div className="text-center">
                 

                    <div class="stat">
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Summary;