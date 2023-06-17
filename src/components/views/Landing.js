import React from 'react';
import { useEffect, useState } from 'react';
import { Container} from 'rsuite';
import Navigation from '../elements/Navigation';
import HeaderSainpse from "../elements/HeaderSainpse";
import Loader from '../elements/Loader'
import "../../styles/Landing.css";



const Landing = () => {
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
                {isLoading ? <Loader /> : <HeaderSainpse />}
                   
                </Container>
            </Container>
        </div>
    );
};

export default Landing;