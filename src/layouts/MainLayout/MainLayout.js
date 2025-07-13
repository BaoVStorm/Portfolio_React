import Header from '~/layouts/components/Header';
import BoxBar from '~/layouts/components/BoxBar';
import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
// import SkillsSection from './SkillsSection';


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
            {/* <AboutSection /> */}
            {/* <SkillsSection /> */}
        </>
    );
}

export default MainLayout;
