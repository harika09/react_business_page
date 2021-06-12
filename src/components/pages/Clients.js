import React from 'react'
import '../styles/Clients.css'
import Client1 from '../images/Clients.jpg'

function Clients() {
    return (
        <div className='clients-container'>
            <div className='clients-wrapper bd-container'>
                <h2>Our Clients</h2>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, error commodi aliquid autem harum sint voluptas. Sed, nam sapiente!</p>
            
                <div className='clients-content'>

                        <div className='client-info'>
                            <img src={Client1} alt="clients" />
                            <strong> Ronald Donald</strong>
                            <p>Manager @Albonis San Francisco</p>
                        </div>

                        <div className='client-info'>
                            <img src={Client1} alt="clients" />
                            <strong> Ronald Donald</strong>
                            <p>Manager @Albonis San Francisco</p>
                        </div>

                        <div className='client-info'>
                            <img src={Client1} alt="clients" />
                            <strong> Ronald Donald</strong>
                            <p>Manager @Albonis San Francisco</p>
                        </div>
                </div>

            </div>
        </div>
    )
}

export default Clients
