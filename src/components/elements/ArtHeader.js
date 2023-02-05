
import { Header, Container, Row, Col } from 'rsuite';
import { Carousel } from 'rsuite';
import '../../styles/AiArt.css';
function ArtHeader() {

    return (
        <Header className='bg'>
            <Carousel autoplay className="custom-slider slider">
                <img src="/asserts/art/wallpaper/wall1.png" className='cImg' height="500" alt="Alien" />
                <img src="/asserts/art/wallpaper/wall2.png" className='cImg' height="500" alt='Vikings' />
                <img src="/asserts/art/wallpaper/wall3.png" className='cImg' height="500" alt='Women' />
                <img src="/asserts/art/wallpaper/wall4.png" className='cImg' height="500" alt='Artchitecture' />
                <img src="/asserts/art/wallpaper/wall5.png" className='cImg' height="500" alt='Artchitecture' />
            </Carousel>
            <Container>
                <h5 className='Title'>AI Generated Content</h5>
                <Row className='Explain'>
                    <Col lg={12} xs={24} className="contentCol">
                        <p>Stable Diffusion is a machine-learning model that converts text into realistic and artisitic, images. It enables users to produce artwork quickly, thus allowing creatives to generate ideas efficiently. </p>
                        <div className='LinkSainpse'>
                            <a href="https://huggingface.co/tasks/text-to-image" className="Link">Try on Hugging Face</a>
                        </div>
                        <div className='LinkSainpse'>
                            <a href="https://jalammar.github.io/illustrated-stable-diffusion/" className="Link">How it Works (Visual Explaination)</a>
                        </div>
                    </Col>
                    <Col lg={12} xs={24}>
                        <Carousel className="custom-slider slider">
                            <img src="/asserts/art/tattoos/Tattoo1.png" className='cImg' height="500" alt="Alien" />
                            <img src="/asserts/art/tattoos/Tattoo2.png" className='cImg' height="500" alt='Vikings' />
                            <img src="/asserts/art/tattoos/Tattoo3.png" className='cImg' height="500" alt='Vikings' />
                            <img src="/asserts/art/tattoos/Tattoo4.png" className='cImg' height="500" alt='Vikings' />
                            <img src="/asserts/art/tattoos/Tattoo5.png" className='cImg' height="500" alt='Vikings' />
                            <img src="/asserts/art/tattoos/Tattoo6.png" className='cImg' height="500" alt='Vikings' />
                            <img src="/asserts/art/tattoos/Tattoo7.png" className='cImg' height="500" alt='Vikings' />
                        </Carousel>
                        <p class="captions">Photo realistic tattoo designs</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h5 className='TitleImageTypes'>Desktop Wallpapers</h5>
                <Row>
                    <Col>
                        <Carousel className="custom-slider slider">
                            <img src="/asserts/art/wallpaper/women1.png" className='cImgDonwload' height="1080" alt="Alien" />
                          </Carousel>
                    </Col>
                </Row>
            </Container>
        </Header>
    );
}

export default ArtHeader;
