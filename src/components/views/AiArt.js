import React from 'react';
import { Container } from 'rsuite';
import { useEffect, useState } from 'react';
import Navigation from '../elements/Navigation';
import "../../styles/AiArt.css";
import ArtHeader from '../elements/ArtHeader';
import Loader from '../elements/Loader'
import "../../styles/Landing.css";



const AiArt = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.onload = () => {
        setIsLoading(false);
        };
    }, []);

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