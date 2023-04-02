import './About.scss';
import shrujanImg from '../../Assets/Img/passport-photo.jpg';


const About = () => {
    return (
        <main>
            <section className="about-section" id='about-me'>
                <div className="util-center-text">
                    <h2 className="about-section-header util-margin-bottom-8">
                        More About me 
                    </h2>
                </div>
                <div>
                    <div className="col-1-of-2 about-section__details">
                        <div className="logo-container">
                            <img src={shrujanImg} alt="Shrujan Shetty" className="header__logo" />
                        </div>
                        <h3 className="heading-tertiary util-margin-bottom-small">Who am I?</h3>
                        <p className="description util-margin-bottom-small ">
                            Hi, my name is Shrujan Shetty and I am a Software Engineer with over 10+ years of experience based in India. I enjoy building rich interactive web applications that people enjoy using.
                        </p>
                        <p className="description"> If you are an employer looking to hire, feel free to get in touch on Linkedin or drop an Email.</p>
                    </div>

                    <div className="col-1-of-2 about-section__contact">
                        <a className="contact-option util-margin-bottom-small " target="_blank" href="./Assets/Resume/ShrujanShetty.pdf" download={ true }>
                            <span>Resume</span>
                        </a>
                        <a className="contact-option util-margin-bottom-small " target="_blank" href="https://www.linkedin.com/in/shrujan-shetty-78141b30/">
                            <span>Linkedin</span>
                        </a>
                        <a className=" contact-option util-margin-bottom-small " href="mailto:shrork@gmail.com"> 
                            <span>Mail</span>
                        </a>
                        <a className="contact-option util-margin-bottom-small" target="_blank" href="https://github.com/shrujan">
                            <span>Github</span>
                        </a>
                    </div>
                    
                </div>
            </section> 
        </main>
        
    )
}

export default About;