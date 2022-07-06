import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading';

import ToolCard from './ToolCard';

const Tools = () => {

    // const [tools,setTools]=useState([])
    
    const {isLoading,error,data:tools}=useQuery('tool',()=>fetch('http://localhost:5000/tools').then(res=>res.json()))
    if(isLoading)
    {
        return <Loading/>
    }
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-semibold text-center py-5 '>Our Latest Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
            {
              tools.map(t=><ToolCard
                key={t._id}
                tools={t}
                
                ></ToolCard>)
            }
         
           </div>
        </div>
    );
};

export default Tools;