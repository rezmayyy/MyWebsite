import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import TribeWellPic from '../assets/TribeWellPic.png';
import MyTunesPic from '../assets/MyTunesPic.png';
import YoloPic from '../assets/YoloPic.png';

function Projects() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3, once: true }
        );

        const aboutSection = document.getElementById('project');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => {
            if (aboutSection) {
                observer.unobserve(aboutSection);
            }
        };
    }, []);

    return (
        <section
            id="project"
            className={`${visible ? 'fade-in-up' : ''}`}
            style={{
                background: 'linear-gradient(to bottom, #000000, #0096FF)',
                paddingTop: '60px',
                paddingBottom: '60px',
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center text-white">
                        <h1>Projects</h1>
                        <Accordion defaultActiveKey="0" className="mt-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <strong>TribeWell</strong>&nbsp;- Holistic Healing Platform
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        This was a project I did for my senior project. We were given a client
                                        to work with and the client wanted to create an environment that fosters community
                                        engagement and involvement for all things healing. I like to describe it as Facebook
                                        or Instagram but for Spiritual Healing. Here, users can upload content about alternative
                                        healing which is healing through a non-traditional sense. The client's name is Dr. Gigi
                                        Smith and her company is Serendipity Innovation. I learned a lot making this project and
                                        Dr. Gigi allowed me to work with her post-graduation.
                                        <br />
                                        <strong>Tech Stack:</strong> React · Stripe · Firebase (Firestore, Authentication, Storage, Cloud Functions)
                                    </p>
                                    Check out the code
                                    <a
                                        href="https://github.com/rezmayyy/GitBudsProject"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#00C3FF', textDecoration: 'underline', marginLeft: '5px' }}
                                    >
                                        here!
                                    </a>
                                    <img
                                        src={TribeWellPic}
                                        alt="TribeWell Project Screenshot"
                                        style={{
                                            width: '100%',
                                            maxWidth: '600px',
                                            borderRadius: '10px',
                                            marginTop: '20px',
                                            boxShadow: '0 4px 20px rgba(0, 150, 255, 0.4)'
                                        }}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <strong>MyTunes</strong>&nbsp;- Decentralized Music Marketplace
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        MyTunes is a decentralized music marketplace that allows artists to upload songs, set prices,
                                        and assign revenue splits to collaborators using Ethereum smart contracts.
                                        <br />
                                        It uses IPFS to store audio files and MetaMask for wallet and transaction handling.
                                        Smart contracts were built and tested with Ganache, and the React frontend offers real-time
                                        blockchain interaction.
                                        <br />
                                        <strong>Tech Stack:</strong> React · Solidity · Truffle · IPFS · MetaMask
                                    </p>
                                    Check out the code
                                    <a
                                        href="https://github.com/rezmayyy/DecentralizedMusicApp"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#00C3FF', textDecoration: 'underline', marginLeft: '5px' }}
                                    >
                                        here!
                                    </a>
                                    <img
                                        src={MyTunesPic}
                                        alt="MyTunes Project Screenshot"
                                        style={{
                                            width: '100%',
                                            maxWidth: '600px',
                                            borderRadius: '10px',
                                            marginTop: '20px',
                                            boxShadow: '0 4px 20px rgba(0, 150, 255, 0.4)'
                                        }}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <strong>Voice Vision</strong>&nbsp;- Assistive Object Detection Tool
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Voice Vision is an assistive tool designed for visually impaired users. It uses a camera
                                        and AI to identify objects and read text in real time, then announces their position relative
                                        to the frame center.
                                        <br />
                                        We used YOLO Nano for object detection, MediaPipe for finger tracking, and EasyOCR for reading text.
                                        Initially tested on a Raspberry Pi but later demoed on a laptop for performance reasons.
                                        <br />
                                        <strong>Tech Stack:</strong> Python · YOLO Nano · EasyOCR · MediaPipe · Raspberry Pi
                                    </p>
                                    Check out the code
                                    <a
                                        href="https://github.com/christian-buco/Voice-Vision"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: '#00C3FF', textDecoration: 'underline', marginLeft: '5px' }}
                                    >
                                        here!
                                    </a>
                                    <img
                                        src={YoloPic}
                                        alt="Voice Vision Project Screenshot"
                                        style={{
                                            width: '100%',
                                            maxWidth: '600px',
                                            borderRadius: '10px',
                                            marginTop: '20px',
                                            boxShadow: '0 4px 20px rgba(0, 150, 255, 0.4)'
                                        }}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}

export default Projects;
