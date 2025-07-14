import Header from '~/layouts/components/Header';
import BoxBar from '~/layouts/components/BoxBar';
import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
// import ContactSection from './ContactSection';

function MainLayout() {
    return (
        <>
            <GlobalHeaderProvider>
                <Header />
                <BoxBar />
            </GlobalHeaderProvider>

            {/* Section */}

            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            {/* <ContactSection /> */}
        </>
    );
}

export default MainLayout;
