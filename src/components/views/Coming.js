import React from 'react';
import { Container} from 'rsuite';
import Navigation from '../elements/Navigation';
import ComingHeader from "../elements/ComingHeader";
import "../../styles/Landing.css";


const BackgroundVideo = () => (
    <video autoPlay loop muted>
        <source src={'/asserts/bg1.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
);

const Coming = () => {
    return (
        <div className="show-fake-browser sidebar-page header">
            <Container className='Landingbg'>
                <Navigation />
                <Container className='bg'>
                    <BackgroundVideo />
                    <ComingHeader />
                </Container>
            </Container>
        </div>
    );
};

export default Coming;