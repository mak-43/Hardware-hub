import React from 'react';
import ReviewCard from '../Dashboard/ReviewCard';
import HomeTools from '../HomeTools';
import Tools from '../Tools';
import Contuct from './Contuct';
import Landing from './Landing';



const Home = () => {
    return (
        <div>
            {/* <Landing/> */}
           
            <Contuct/>
            <HomeTools/>
            <ReviewCard/>
            
         
        </div>
    );
};

export default Home;