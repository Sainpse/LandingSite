
import { Header, FlexboxGrid } from 'rsuite';
import '../../styles/HeaderSainpse.css';

function ComingHeader() {

    return (
        <Header className='bg'>
            <FlexboxGrid justify='center'>
                <div className="header-container">
                    <h1 className="title">Coming Soon...</h1>
                    <p className="mission-statement">Picture it like taking a coffee break, but for your digital presence.</p>
                </div>
            </FlexboxGrid>
        </Header>
    );
}

export default ComingHeader;
