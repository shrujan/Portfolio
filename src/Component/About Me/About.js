import React from 'react';
import './About.scss'

const About = (props) => {
    return (
        <main>
            <section className="about-section">
                <div className="util-center-text util-margin-bottom-big ">
                    <h2 className="about-section-header util-margin-bottom-8">
                        More About me 
                    </h2>
                </div>
                <div className="row">
                    <div className="col-1-of-2 about-section__details">
                        <h3 className="heading-tertiary util-margin-bottom-small">Who am I?</h3>
                        <p className="description util-margin-bottom-small ">
                            Hi, my name is Shrujan Shetty and I am a Software Engineer with over 6+ years of experience based in India. I enjoy building rich interactive web applications that people enjoy using.
                        </p>
                        <p className="description"> If you are an employer looking to hire, feel free to get in touch on Linkedin or drop an Email.</p>
                    </div>

                    <div className="col-1-of-2 about-section__contact">
                        <a className="contact-option util-margin-bottom-small " target="_blank" href="https://www.linkedin.com/in/shrujan-shetty-78141b30/">
                            Resume
                        </a>
                        <a className="contact-option util-margin-bottom-small " target="_blank" href="https://www.linkedin.com/in/shrujan-shetty-78141b30/">
                            Linkedin
                        </a>
                        <a className=" contact-option util-margin-bottom-small " href="mailto:shrork@gmail.com"> 
                            Mail
                        </a>
                        <a className="contact-option util-margin-bottom-small" target="_blank" href="https://github.com/shrujan">
                            Github
                        </a>
                    </div>
                    
                </div>
                {/* <div className="row">
                    <div className="col-1-of-3">
                        1 0f 3 
                    </div>
                    <div className="col-1-of-3">
                    1 0f 3 
                        
                        </div>
                    <div className="col-1-of-3">
                        1 0f 3 
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        1 0f 3 
                    </div>
                    <div className="col-2-of-3">
                        2 0f 3 
                        
                        </div>
                    
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        1 / 4
                    </div>
                    <div className="col-1-of-4">
                        1 / 4
                    </div>
                    <div className="col-1-of-4">
                    1/ 4
                    </div>
                    <div className="col-1-of-4">
                    1/ 4
                    </div>
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        1 / 4
                    </div>
                    <div className="col-1-of-4">
                        1 / 4
                    </div>
                    <div className="col-2-of-4">
                    2/ 4
                    </div>
                   
                </div>

                <div className="row">
                    <div className="col-1-of-4">
                        1 / 4
                    </div>
                    
                    <div className="col-3-of-4">
                    3/ 4
                    </div>
                   
                </div> */}
            </section> 
        </main>
        
    )
}

export default About;