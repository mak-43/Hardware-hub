import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';
import ToolCard from './ToolCard';
import { useNavigate } from 'react-router-dom'

const HomeTools = () => {
    const navigate = useNavigate()
    const { isLoading, error, data: tools, refetch } = useQuery('update', () => fetch('https://git.heroku.com/morning-atoll-82384.git /updatetools').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    refetch()
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-semibold text-center py-5 '>Our Latest Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    tools.map(t => <ToolCard
                        key={t._id}
                        tools={t}

                    ></ToolCard>)
                }

            </div>
            <button className='flex justify-center items-center mt-10  btn mx-auto'>  <p onClick={() => navigate('/tools')} >SEE MORE ...</p></button>
        </div>
    );
};

export default HomeTools;