import Header from '~/layouts/components/Header';
import BoxBar from '~/layouts/components/BoxBar';
import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';

import ElementorStyles from '../components/ElementorStyles';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import Footer from '~/layouts/components/Footer';

function MainLayout() {
    return (
        <ElementorStyles>
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
        </ElementorStyles>
    );
}

export default MainLayout;
