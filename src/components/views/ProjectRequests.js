import React from 'react';
import { Container, Form, Input, Button, Checkbox, CheckboxGroup } from 'rsuite';
import Navigation from '../elements/Navigation';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import "../../styles/ProjectRequests.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const ProjectRequests = () => {
    const [projectName, setProjectName] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [categories, setCategories] = useState([]);

    

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs.send('Sainpse_Mail_Service', 'template_psfv0ea', {
        projectName: projectName,
        projectDescription: projectDescription,
        clientName: clientName,
        clientEmail: clientEmail,
        categories: categories.join(', ')
        }, 'dd5oCAyB_onRRV53J')
        .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Request Sent Successfully!, Marcus will contact you soon!');
        }, (err) => {
        console.log('FAILED...', err);
        toast.error('Somthing went wrong, please try again! or contact Marcus Directly', err);
        });
    };
    return (
        <div className="show-fake-browser sidebar-page header">
            <Container>
                 <ToastContainer />
                <Navigation />
                <Container className='containerClassForm'>
                    <div className="form-container">
                        <h1 className='form-title'>Project Request</h1>
                        <p className='form-subtitle'>What will be help you become better at what you do?</p>
                    </div>
                    <Form fluid>
                       
                        <Input
                            name="projectName"
                            value={projectName}
                            placeholder='Project Name'
                            onChange={value => setProjectName(value)}
                        />
                       
                        <Input
                            name="projectDescription"
                            componentClass="textarea"
                            as="textarea" 
                            rows={3}
                            value={projectDescription}
                            placeholder='Project Description'
                            onChange={value => setProjectDescription(value)}
                        />
                       
                        <Input
                            name="clientName"
                            value={clientName}
                            placeholder='Full Name'
                            onChange={value => setClientName(value)}
                        />
                       
                        <Input
                            name="clientEmail"
                            value={clientEmail}
                            placeholder='Email'
                            onChange={value => setClientEmail(value)}
                        />
                    
                        
                        <CheckboxGroup
                            name="categories"
                            value={categories}
                            onChange={value => setCategories(value)}
                        >
                            <Checkbox value="Dev">Software Development</Checkbox>
                            <Checkbox value="Analysis">Analysis</Checkbox>
                            <Checkbox value="Automation">Automation</Checkbox>
                            <Checkbox value="Data Collection">Data Collection</Checkbox>
                        </CheckboxGroup>
                        <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                    </Form>
                </Container>
            </Container>
        </div>
    );
};

export default ProjectRequests;