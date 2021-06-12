import React from 'react'
import '../styles/Services.css'

function Services() {
    return (
        <section id='services'>
            <div className='services-container'>
            <div className='services-wrapper bd-container'>
                <h2>Services</h2>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, error commodi aliquid autem harum sint voluptas. Sed, nam sapiente!</p>

                <div className='services-card-wrapper'>

                    <div className='services-card'>
                        <i className="fas fa-home"></i>
                        <p><strong>Floors & Roofs</strong></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam!</p>
                        <button>Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>

                    <div className='services-card'>
                        <i className="fas fa-building"></i>
                        <p><strong>Rooms & Halls</strong></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam!</p>
                        <button>Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>

                    <div className='services-card'>
                        <i className="fas fa-hotel"></i>
                        <p><strong>Basement</strong></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam!</p>
                        <button>Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>

                    <div className='services-card'>
                        <i className="fas fa-pencil-ruler"></i>
                        <p><strong>Consulting</strong></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, ullam!</p>
                        <button>Learn More <i className="fas fa-arrow-right"></i></button>
                    </div>
                    
                </div>

                <hr />
            </div>
        </div>
        </section>
    )
}

export default Services
