
import { Header, Container, Row, Col } from 'rsuite';
import { Carousel } from 'rsuite';
import '../../styles/AiArt.css';
function ArtHeader() {

    return (
        <Header className='bg'>
            <Carousel autoplay className="custom-slider slider">
                <img src="https://i.ibb.co/TWrj2gs/wall1.png" alt="wall1" border="0" className='cImg' height="500" />
                <img src="https://i.ibb.co/yR9KTRQ/wall2.png" alt="wall2" border="0" className='cImg' height="500" />
                <img src="https://i.ibb.co/LgmfZ8D/Wall3.png" alt="Wall3" border="0" className='cImg' height="500" />
                <img src="https://i.ibb.co/jLkCsRV/Wall4.png" alt="Wall4" border="0" className='cImg' height="500" />
                <img src="https://i.ibb.co/PgJX7zw/wall5.png" alt="wall5" border="0" className='cImg' height="500" />
                <img src="https://i.ibb.co/jMCcr5X/women1.png" alt="women1" border="0" className='cImg' height="500" />
            </Carousel>
            <Container>
                <h5 className='Title'>AI Generated Content</h5>
                <Row className='Explain'>
                    <Col lg={12} xs={24} className="contentCol">
                        <p>Stable Diffusion is a machine-learning model that converts text into realistic and artisitic, images. It enables users to produce artwork quickly, thus allowing creatives to generate ideas efficiently. </p>
                        <div className='LinkSainpse'>
                            <a href="https://stablediffusionweb.com/#demo" className="Link">Try Demo</a>
                        </div>
                        <div className='LinkSainpse'>
                            <a href="https://jalammar.github.io/illustrated-stable-diffusion/" className="Link">How it Works (Visual Explaination)</a>
                        </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <Carousel className="custom-slider slider">
                            <img src="https://i.ibb.co/GRq93Wm/Tattoo1.png" alt="Tattoo1" className='cImg' height="500" />
                            <img src="https://i.ibb.co/PrpbTYc/tattoo2.png" alt="tattoo2" className='cImg' height="500" />
                            <img src="https://i.ibb.co/R4JKC63/tattoo3.png" alt="tattoo3" className='cImg' height="500" />
                            <img src="https://i.ibb.co/0QRqyTd/tattoo4.png" alt="tattoo4" className='cImg' height="500" />
                            <img src="https://i.ibb.co/02096vm/tattoo5.png" alt="tattoo5" className='cImg' height="500" />
                            <img src="https://i.ibb.co/nzBx5K7/Tattoo6.png" alt="Tattoo6" className='cImg' height="500" />
                            <img src="https://i.ibb.co/RDYHdVS/Tattoo7.png" alt="Tattoo7" className='cImg' height="500" />
                            <img src="https://i.ibb.co/n7zyw8N/Tattoo8.png" alt="Tattoo8" className='cImg' height="500" />

                        </Carousel>
                        <p class="captions">Photo realistic tattoo designs</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col lg={24} xs={24}>
                        <div class="cardImg">
                            <div class="card-header">Desktop Wallpapers</div>
                            <div class="card-body">
                                <img src="https://i.ibb.co/jMCcr5X/women1.png" alt="women1" border="0" className='cImg' height="500" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default ArtHeader;










