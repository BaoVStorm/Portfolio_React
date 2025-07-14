import cx from 'classnames';
import { useThemeContext } from '~/contexts/ThemeContext';

import './ProjectsSection.scss';
import { projects } from '~/configs/ProjectsConfig';

function ProjectsSection() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <section id="projects" className="section">
            <div className="elementor-spacer-inner-background">
                <div className={cx('elementor-spacer-inner', 'space-box-1', isLightTheme ? 'light' : 'dark')}></div>
            </div>

            <h1 className={cx('title-section', isLightTheme ? 'light' : 'dark')}>projects</h1>
            <div className="box-project">
                {projects.map((project, index) => (
                    <div key={index} className={cx('detail-box-project', isLightTheme ? 'light' : 'dark')}>
                        <a href={project.href} className="image-box-project" target="_blank">
                            <img src={project.img} alt="image" />
                        </a>
                        <div className={cx('content-box-project', 'text-main', isLightTheme ? 'light' : 'dark')}>
                            <h1 className="title-content-box-project">{project.title}</h1>
                            <p className="des-content-box-project">{project.des}</p>
                            <div>
                                <a
                                    href={project.href}
                                    className={cx(
                                        'viewmore-content-box-project',
                                        'ani-hover',
                                        'text-main',
                                        isLightTheme ? 'light' : 'dark',
                                    )}
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
