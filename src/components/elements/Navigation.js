import AdvancedAnalyticsIcon from '@rsuite/icons/AdvancedAnalytics';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import UserInfoIcon from '@rsuite/icons/UserInfo';
import OneColumnIcon from '@rsuite/icons/OneColumn';
import AppSelectIcon from '@rsuite/icons/AppSelect';
import { Sidebar, Sidenav, Navbar, Nav,  Drawer, Grid, Row, Col} from 'rsuite';
import Card from './Card';
import React from 'react';
import "../../styles/SideNav.css";
import Divider from 'rsuite/Divider';
import { Link } from "react-router-dom";




const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

function Navigation() {
  const [expand, setExpand] = React.useState(false);
  const [size] = React.useState('xs');
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const handleOpen = key => {
    setOpen(true);
    setPlacement(key);
  };
  return (
    <>
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        className="SideNav-container"
        width={expand ? 250 : 56}
        collapsible
      >
        <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <Nav.Item eventKey="1"  href="/" icon={<OneColumnIcon />}>
                S | AI | N P S E
              </Nav.Item>
              <Nav.Item eventKey="2" icon={<AdvancedAnalyticsIcon />} onClick={() => handleOpen('bottom')}>
                About
              </Nav.Item>
              <Nav.Menu
                eventKey="3"
                trigger="hover"
                title="Projects"
                icon={<AppSelectIcon />}
                placement="rightStart"
              >
                <Nav.Item eventKey="3-1" as={Link} to="/Coming">Hedgehog</Nav.Item>
                <Nav.Item eventKey="3-2" as={Link} to="/Coming">Merch</Nav.Item>
                <Nav.Item eventKey="3-3" as={Link} to="/AiArt">AI Art</Nav.Item>
                <Nav.Item eventKey="3-4" as={Link} to="/Coming">Education</Nav.Item>
                <Nav.Item eventKey="3-5" as={Link} to="/Coming">Project Requests</Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="4"
                trigger="hover"
                title="Contact"
                icon={<UserInfoIcon />}
                placement="rightStart"
              >
               <Nav.Item eventKey="4-1">Github</Nav.Item>
                <Nav.Item eventKey="4-2">Mail</Nav.Item>
                <Nav.Item eventKey="4-3">Phone</Nav.Item>
                <Nav.Item eventKey="4-4">Twitter</Nav.Item>
                <Nav.Item eventKey="4-5">Instagram</Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>
      <Drawer size={size} placement={placement} open={open} onClose={() => setOpen(false)} className="About">
        <Drawer.Header>
          <Drawer.Title>About</Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
        <Grid fluid>
          <Row className="AboutValues">
            <Col xs={24}>
              <Divider />
              <h2>Values</h2>
              <Divider />
            </Col>
          </Row>
          <Row className="AboutValues">
              <Col lg={6} xs={24}>
                  <Card header="Empowerment" content="By empowering individuals, I aim to enable people to make the most of their abilities and achieve their full potential, both personally and professionally."/>
              </Col>
              <Col lg={6}  xs={24}>
                <Card header="Efficiency" content="By striving for efficiency, I aim to make the best use of my resources, in order to achieve my goals in the most effective and efficient manner possible."/>
              </Col>
              <Col lg={6}  xs={24}>
                <Card header="Clarity" content="By prioritizing clarity, The aim is to ensure that my communication and decision-making processes is transparent and straightforward as possible, which can help to minimize confusion and misunderstandings."/>
              </Col>
              <Col lg={6}  xs={24}>
                <Card header="Collaboration" content="By fostering collaboration, The aim is to encourage the sharing of knowledge, ideas, and expertise among people, enabling us to achieve more together than we could individually."/>
              </Col>
          </Row>
          <Row>
            <Col xs={24}>
              <Divider />
              <h2>Mission</h2>
              <Divider />
              <p className='AboutMissionContent'>The Sainpse Institute of Augmented Intelligence mission is simply to empower individuals, organizations and society as a whole though Augmented Intelligence</p>
              <p className=''>2023 - Sainpse</p>
              <a href="https://www.codementor.io/@marcusmadumo?refer=badge"><img src="https://www.codementor.io/m-badges/marcusmadumo/im-a-cm-b.svg" alt="Codementor badge"/></a>
            </Col>
          </Row>
        </Grid>
          
        </Drawer.Body>
      </Drawer>
    </>

  );
}

export default Navigation;

