import React, { useEffect, useState } from 'react';
import ToolCard from './ToolCard';

const Tools = () => {

    const [tools,setTools]=useState([])
    useEffect(()=>{
        fetch('Tools.json')
        .then(res=>res.json())
        .then(data=>setTools(data))
    },[])
    return (
        <div className='my-10'>
            <h1 className='text-5xl font-semibold text-center py-5 '>Our Latest Tools</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 '>
            {
                tools.map(t=><ToolCard
                key={t.id}
                tools={t}
                
                ></ToolCard>)
            }
          {
           
          }
           </div>
        </div>
    );
};

export default Tools;