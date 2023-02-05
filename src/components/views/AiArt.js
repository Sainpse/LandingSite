import React from 'react';
import { Container } from 'rsuite';
import Navigation from '../elements/Navigation';
import "../../styles/AiArt.css";
import ArtHeader from '../elements/ArtHeader';



const AiArt = () => {
    return (
        <div className="show-fake-browser sidebar-page header">
            <Container className='Landingbg'>
                <Navigation />
                <Container className='bg'>
                   <ArtHeader />
                </Container>
            </Container>
        </div>
    );
};

export default AiArt;