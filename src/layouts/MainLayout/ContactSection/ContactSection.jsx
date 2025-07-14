import './ContactSection.scss';

import FormContact from './FormContact';

function ContactSection() {
    return (
        <section id="contact" class="section">
            <h1 class="title-section">contact</h1>
            <div class="box-contact">
                <FormContact />

                <div class="detail-box-contact">
                    <div class="decorate-contact">
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div class="box1-contact text-main">i'll be glad to answer your questions!</div>

                    <div class="logo-contact">
                        <img src="assets/logo/logo.png" alt="logo" />
                    </div>

                    <div class="box2-contact">
                        <div class="content-contact">
                            <h3 class="head-content-contact">my phone</h3>
                            <h2 class="body-content-contact">0915014470</h2>
                        </div>

                        <div class="content-contact">
                            <h3 class="head-content-contact">my email</h3>
                            <h2 class="body-content-contact">
                                <p>
                                    tranvubao2004<span>@</span>
                                    <span>gmail.com</span>{' '}
                                </p>
                            </h2>
                        </div>

                        <div class="content-contact">
                            <h3 class="head-content-contact">my social</h3>
                            <div class="body-content-contact">
                                <a href="https://www.facebook.com/VStorm.TVB" target="_blank">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </a>
                                <a href="https://www.instagram.com/I_Dont_Have_Instagram:>" target="_blank">
                                    <i class="fa-brands fa-square-instagram"></i>
                                </a>
                                {/* <a href="https://x.com/I_Dont_Have_X">
                                    <i class="fa-brands fa-square-x-twitter"></i>
                                </a> */}

                                {/* <i class="fa-brands fa-facebook-f"></i> */}
                            </div>
                        </div>
                        <div class="content-contact">
                            <h3 class="head-content-contact">call me</h3>
                            <div class="body-content-contact">
                                <a href="https://join.skype.com/invite/qHxc9or0fsDI" target="_blank">
                                    <i class="fa-brands fa-skype"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
