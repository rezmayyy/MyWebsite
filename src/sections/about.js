import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function About() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.3 }
        );

        const aboutSection = document.getElementById('about');
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
        <section id="about">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <h1 className={`heading ${visible ? 'fade-in-up' : ''}`}>About Me</h1>
                        <p className={`paragraph ${visible ? 'fade-in-up' : ''}`}>
                            I graduated from Sacramento State University with a degree in Computer Science. 
                            Before going to Sac State, I was a Biology major at Santa Rosa Junior College. 
                            I switched to Computer Science because I liked to play video games and thought it 
                            would be cool to learn how to code them. Throughout my coursework, I learned many 
                            extremely important concepts like the Two Sum Problem and Pumping Lemma. 
                            These topics didn’t directly help me learn to code games but it did lead me to the 
                            realization that it is very difficult to be an expert at everything in this field, 
                            but I see it as a challenge to keep on learning and to continuously strive for greatness. 
                            The reason I got into coding was because of video games. I enjoy being able to escape 
                            reality and jump into a world that is only limited by the imagination. Coding 
                            isn’t just pressing buttons on a keyboard. Coding is an outlet to express 
                            creativity through whatever that is being created.
                        </p>
                        <div id="projects"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
