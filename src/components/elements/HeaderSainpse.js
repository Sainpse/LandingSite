
import { Header, FlexboxGrid } from 'rsuite';
import './HeaderSainpse.css';

function HeaderSainpse() {

    return (
        <Header className='bg'>
            <FlexboxGrid justify='center'>
                <div className="header-container">
                    <h1 className="title">Sainpse Institute</h1>
                    <p className="mission-statement">Empowering individuals and organizations to make data-driven decisions</p>
                </div>
            </FlexboxGrid>
        </Header>
    );
}

export default HeaderSainpse;
