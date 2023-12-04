import React,  { useEffect } from 'react';
import { Container, Form, Input, InputNumber, Button, Checkbox, CheckboxGroup } from 'rsuite';
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
                        <label>Project Name</label>
                        <Input
                            name="projectName"
                            value={projectName}
                            onChange={value => setProjectName(value)}
                        />
                        <label>Project Description</label>
                        <Input
                            name="projectDescription"
                            componentClass="textarea"
                            as="textarea" 
                            rows={6}
                            value={projectDescription}
                            onChange={value => setProjectDescription(value)}
                        />
                        <label>Full Name</label>
                        <Input
                            name="clientName"
                            value={clientName}
                            onChange={value => setClientName(value)}
                        />
                        <label>Email</label>
                        <Input
                            name="clientEmail"
                            value={clientEmail}
                            onChange={value => setClientEmail(value)}
                        />
                    
                        <label>Type</label>
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