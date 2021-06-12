import React from 'react'
import '../styles/Features.css'
import architectImage from '../images/architect.jpg'

function About() {
    return (
        <div className='feature-container' id='features'>
            <div className='feature-wrapper bd-container'>
                <h2>Features</h2>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, error commodi aliquid autem harum sint voluptas. Sed, nam sapiente!</p>
                <div className='cards-container'>

                    <div className='card'>
                        <div className='card-info'>
                            <h4>Business Strategy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-info'>
                            <h4>Easy Documentation</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-info'>
                            <h4>Real-time Updates</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-info'>
                            <h4>Security Protection</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>LEARN MORE</button>
                        </div>
                    </div>

                </div>

                    <button className='feature-btn'> Explore All Features </button>

                    <div className='feature-lower-wrapper'>

                        <div className='feature-info-wrapper'>

                            <div className='info'>

                                <div>
                                    <i className="fas fa-home"></i>
                                </div>
                                <div>
                                    <h4>Build The House Of Your Dreams</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut dignissimos cum labore eius nisi?</p>
                                </div>
                            </div>

                            <div className='info'>
                                
                                <div>
                                    <i className="fas fa-street-view"></i>
                                </div>
                                <div>
                                    <h4>Get the Best View In the City</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut dignissimos cum labore eius nisi?</p>
                                </div>
                            </div>

                            <div className='info'>
                                
                                <div>
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <div>
                                    <h4>Follow Your Biggest Dream</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aut dignissimos cum labore eius nisi?</p>
                                </div>
                            </div>

                        </div>
                        
                        <div className='feature-info-img'>
                            <img src={architectImage} alt="" />
                        </div>
                    </div>
            </div>

           
        </div>
    )
}

export default About
