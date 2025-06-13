import { Container, Row, Col, Button } from 'react-bootstrap';
import confetti from 'canvas-confetti';
import { useEffect, useRef, useState } from 'react';
import '../styles/home.css';

function Home() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            confetti({
                particleCount: 3,
                angle: 90,
                spread: 45,
                startVelocity: 20,
                origin: {
                    x: e.clientX / window.innerWidth,
                    y: e.clientY / window.innerHeight,
                },
                colors: ['#94E5FC'],
            });
        };

        const section = sectionRef.current;
        if (section) {
            section.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (section) {
                section.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section id="home" ref={sectionRef} style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
            <Container
                fluid
                className="d-flex justify-content-center align-items-start"
                style={{ height: '100vh', paddingTop: '20vh' }}
            >
                <Container
                    ref={containerRef}
                    className={`text-center p-4 ${visible ? 'fade-in-up' : 'fade-out-down'}`}
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px',
                        width: '80%',
                        height: '30vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        opacity: 0,
                    }}
                >
                    <Row>
                        <Col>
                            <h1 className="text-white">
                                Hello! I'm <span style={{ color: '#0096FF' }}>Austin</span>.
                            </h1>
                            <h1>I'm Looking To Hone My Coding Skills.</h1>
                            <Row className="mt-3">
                                <Col>
                                    <Button
                                        variant="dark"
                                        onClick={() => {
                                            const contactSection = document.getElementById('contact');
                                            if (contactSection) {
                                                contactSection.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                    >
                                        Message Me
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;
