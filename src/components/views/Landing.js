import React from 'react';
import { Container } from 'rsuite';
import Navigation from '../elements/Navigation';
import HeaderSainpse from "../elements/HeaderSainpse";
import "../../styles/Landing.css";




const BackgroundVideo = () => (
    <video autoPlay loop muted>
        <source src={'/asserts/bg3.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
);

const Landing = () => {
    
   
  
    return (
        <div className="show-fake-browser sidebar-page header">
            <Container className='Landingbg'>
                <Navigation />
                <Container className='bg'>
                    <BackgroundVideo />
                    <HeaderSainpse />
                </Container>
            </Container>
        </div>
    );
};

export default Landing;