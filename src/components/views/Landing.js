import React from 'react';
import { Container} from 'rsuite';
import Navigation from '../elements/Navigation';
import HeaderSainpse from "../elements/HeaderSainpse";
import "../../styles/Landing.css";



const Landing = () => {
    return (
        <div className="show-fake-browser sidebar-page header">
            <Container className='Landingbg'>
                <Navigation />
                <Container className='bg'>
                    
                    <HeaderSainpse />
                </Container>
            </Container>
        </div>
    );
};

export default Landing;