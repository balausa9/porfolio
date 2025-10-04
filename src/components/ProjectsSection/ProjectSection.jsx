import './ProjectSection.css'
import ProjectCards from '../ProjectCards/ProjectCards'

const ProjectSection = () => {
    return (
        <section>
            <div className="container">
                <div className='project_title'>
                    <h1 className='title'>
                        Featured <span>Projects</span>
                    </h1>
                    <p className='title_desc'>
                        Here are some of my recent projects. 
                        Each project was carefully crafted with 
                        attention to detail, performance, and user
                        experience.
                    </p>
                </div>

                <ProjectCards />
                
            </div>
        </section>
    )
}

export default ProjectSection