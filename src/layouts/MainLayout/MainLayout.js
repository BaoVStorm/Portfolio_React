import Header from '~/layouts/components/Header';
import BoxBar from '~/layouts/components/BoxBar';
import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

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
        </>
    );
}

export default MainLayout;
