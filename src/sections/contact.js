import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        if (name && email && message) {
            fetch('https://formsubmit.co/ajax/austinmann12@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((data) => {
                    alert('Message Sent Successfully!');
                })
                .catch((error) => {
                    alert('Error sending message');
                });
        }
    };

    return (
        <section id="contacts" style={{ background: 'linear-gradient(to bottom, #0096FF, #FFFFFF)', padding: '60px 0' }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center text-white">
                        <h1>Contact Me</h1>
                        <h5>Feel free to ask me anything and I’ll get back to you as soon as I can. </h5>
                        <p style={{ textDecoration: 'underline' }}>
                            austinmann12@gmail.com
                        </p>
                        <a
                            href="https://github.com/rezmayyy"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'white', fontSize: '24px', display: 'inline-block', marginTop: '10px' }}
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>

                        <Form className="mt-5" onSubmit={handleSubmit}
                            style={{
                                backgroundColor: 'white',
                                padding: '30px',
                                borderRadius: '8px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                            }}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                />
                            </Form.Group>

                            <Button className="mt-2" variant="dark" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                        <small style={{ display: 'block', marginTop: '200px', color: '#6c757d', fontSize: '10px', }}>
                            Image credit: Art by noctiswhole on https://blenderartists.org/u/noctiswhole/summary
                        </small>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
