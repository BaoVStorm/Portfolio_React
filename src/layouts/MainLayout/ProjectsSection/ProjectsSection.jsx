import './ProjectsSection.scss';

import { projects } from '~/configs/ProjectsConfig';

function ProjectsSection() {
    return (
        <section id="projects" className="section">
            <div className="elementor-spacer-inner-background">
                <div className="elementor-spacer-inner space-box-1"></div>
            </div>

            <h1 className="title-section">projects</h1>
            <div className="box-project">
                {projects.map((project, index) => (
                    <div key={index} className="detail-box-project light">
                        <a href={project.href} className="image-box-project" target="_blank">
                            <img src={project.img} alt="image" />
                        </a>
                        <div className="content-box-project text-main light">
                            <h1 className="title-content-box-project">{project.title}</h1>
                            <p className="des-content-box-project">{project.des}</p>
                            <div>
                                <a
                                    href={project.href}
                                    className="viewmore-content-box-project ani-hover text-main light"
                                    target="_blank"
                                >
                                    view more
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
