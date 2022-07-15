import React from 'react';
import Footer from '../../Components/Footer';
import ReviewCard from '../Dashboard/ReviewCard';
import HomeTools from '../HomeTools';
import Tools from '../Tools';
import Contuct from './Contuct';
import Landing from './Landing';
import Summary from './Summary';



const Home = () => {
    return (
        <div>
            <Landing/>
          
            
            <HomeTools/>
            <Summary/>
            <ReviewCard/>
            <Contuct/>
            <Footer/>
         
        </div>
    );
};

export default Home;