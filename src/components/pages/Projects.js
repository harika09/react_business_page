import React from 'react'
import '../styles/Projects.css'
import Project1 from '../images/project1.jpg'
import Project2 from '../images/project2.jpg'
import Project3 from '../images/project3.jpg'
import Project4 from '../images/project4.jpg'
import Project5 from '../images/project5.jpg'
import Project6 from '../images/project6.jpg'
import Project7 from '../images/project7.jpg'
import Project8 from '../images/project8.jpg'


function Projects() {
    return (
        <div className='project-container' id='project'>
            <div className='project-wrapper bd-container'>
                <h2>Projects</h2>
                <p className='text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum eaque, error commodi aliquid autem harum sint voluptas. Sed, nam sapiente!</p>

                <div className='project-cards'>
                    
                    <div className='card-image'>
                        <img src={Project1} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project2} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project4} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project5} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project6} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project7} alt="Project1" />
                        <p>House</p>
                    </div>

                    <div className='card-image'>
                        <img src={Project8} alt="Project1" />
                        <p>House</p>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Projects
