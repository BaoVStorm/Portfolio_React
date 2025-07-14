import Header from '~/layouts/components/Header';
import BoxBar from '~/layouts/components/BoxBar';
import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Footer from '~/layouts/components/Footer';

function MainLayout() {
    return (
        <>
            {/* Header */}
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
            <ContactSection />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default MainLayout;
