import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faSquareFacebook, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import logoVStorm from '~/assets/logo/logo.png';
import './ContactSection.scss';

function BoxContact() {
    return (
        <div class="detail-box-contact">
            <div class="decorate-contact">
                <FontAwesomeIcon icon={faPhone} />
            </div>

            <div class="box1-contact text-main">i'll be glad to answer your questions!</div>

            <div class="logo-contact">
                <img src={logoVStorm} alt="logo" />
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
                            <i>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </i>
                        </a>
                        <a href="https://www.instagram.com/I_Dont_Have_Instagram:>" target="_blank">
                            <i>
                                <FontAwesomeIcon icon={faSquareInstagram} />
                            </i>
                        </a>
                        <a href="" target="_blank">
                            <i>
                                <FontAwesomeIcon icon={faSquareGithub} />
                            </i>
                        </a>
                    </div>
                </div>
                <div class="content-contact">
                    <h3 class="head-content-contact">call me</h3>
                    <div class="body-content-contact">
                        <a href="https://join.skype.com/invite/qHxc9or0fsDI" target="_blank">
                            <i>
                                <FontAwesomeIcon icon={faSkype}/>
                            </i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxContact;
