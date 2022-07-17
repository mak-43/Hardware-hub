import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Footer from '../Components/Footer';
import Loading from '../Components/Loading';

import ToolCard from './ToolCard';

const Tools = () => {

    // const [tools,setTools]=useState([])

    const { isLoading, error, data: tools, refetch } = useQuery('tool', () => fetch('https://morning-atoll-82384.herokuapp.com/tools').then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    refetch()
    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold text-center py-5 '>Our Latest Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
                {
                    tools.map(t => <ToolCard
                        key={t._id}
                        tools={t}

                    ></ToolCard>)
                }

            </div>
            <Footer />
        </div>
    );
};

export default Tools;