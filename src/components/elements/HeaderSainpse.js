
import { Header, FlexboxGrid } from 'rsuite';
import '../../styles/HeaderSainpse.css';

function HeaderSainpse() {

    return (
        <Header className='LandingBG'>
            <FlexboxGrid justify='center'>
                    <div className="header-container">
                       
                        <h1 className="title animated-component">S | AI | N P S E</h1>
                        <h6 className="subtitle">Institute of augmented intelligence</h6>
                        <p className="mission-statement">Empowering individuals and organizations to make data-driven decisions</p>
                    </div>
            </FlexboxGrid>
        </Header>
    );
}

export default HeaderSainpse;


