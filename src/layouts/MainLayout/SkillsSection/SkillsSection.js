import '~/js/data/skills.js';
import './SkillsSection.scss';

function SkillsSection() {
    return (
        <section id="skills" class="section">
            <div class="elementor-spacer-inner-background">
                <div class="elementor-spacer-inner space2"></div>
            </div>

            <h1 class="title-section">skills</h1>

            <div class="box-skill-1th">
                <div class="head-box-skill">
                    <div>programming language</div>
                </div>
                <div class="body-box-skill body-box-skill-2col" id="programming-language">
                    {/* 
                        <div class="detail-box-skill">
                            <span class="percent-nonslider-skill">75</span>
                            <div class="content-box-skill">
                                <span class="name-detail-box-skill">c, c++</span>
                                <div class="nonslider-skill">
                                    <div class="nonslider-skill-detail"></div>
                                </div>
                            </div>
                        </div>  
                    */}
                </div>
            </div>

            <div class="box-skill-1th">
                <div class="box-skill-2th">
                    <div class="head-box-skill">
                        <div>soft skill</div>
                    </div>
                    <div class="body-box-skill" id="soft-skill">
                        {/* 
                            <div class="detail-box-skill">
                                <span class="percent-nonslider-skill">75</span>
                                <div class="content-box-skill">
                                    <span class="name-detail-box-skill text-main">creativity</span>
                                    <div class="nonslider-skill">
                                        <div class="nonslider-skill-detail start-nonslider light"></div>
                                    </div>
                                </div>
                            </div>  
                        */}
                    </div>
                </div>

                <div class="box-skill-2th">
                    <div class="head-box-skill">
                        <div>hard skill</div>
                    </div>
                    <div class="body-box-skill" id="hard-skill">
                        {/* 
                            <div class="detail-box-skill">
                                <span class="percent-nonslider-skill">75</span>
                                <div class="content-box-skill">
                                    <span class="name-detail-box-skill text-main">Programming & Scripting</span>
                                    <div class="nonslider-skill">
                                        <div class="nonslider-skill-detail"></div>
                                    </div>
                                </div>
                            </div>  
                        */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
