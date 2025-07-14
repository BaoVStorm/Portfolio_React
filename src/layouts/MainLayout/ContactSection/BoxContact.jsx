import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSkype, faSquareFacebook, faSquareGithub, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useThemeContext } from '~/contexts/ThemeContext';

import logoVStorm from '~/assets/logo/logo.png';
import './ContactSection.scss';

function BoxContact() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <div className="detail-box-contact">
            <div className="decorate-contact">
                <FontAwesomeIcon icon={faPhone} />
            </div>

            <div className={cx("box1-contact", "text-main", isLightTheme ? 'light' : 'dark')}>i'll be glad to answer your questions!</div>

            <div className="logo-contact">
                <img src={logoVStorm} alt="logo" />
            </div>

            <div className="box2-contact">
                <div className="content-contact">
                    <h3 className="head-content-contact">my phone</h3>
                    <h2 className="body-content-contact">0915014470</h2>
                </div>

                <div className="content-contact">
                    <h3 className="head-content-contact">my email</h3>
                    <h2 className="body-content-contact">
                        <p>
                            tranvubao2004<span>@</span>
                            <span>gmail.com</span>{' '}
                        </p>
                    </h2>
                </div>

                <div className="content-contact">
                    <h3 className="head-content-contact">my social</h3>
                    <div className="body-content-contact">
                        <a href="https://www.facebook.com/VStorm.TVB" target="_blank">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                        </a>
                        <a href="https://www.instagram.com/I_Dont_Have_Instagram:>" target="_blank">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>
                        <a href="" target="_blank">
                            <FontAwesomeIcon icon={faSquareGithub} />
                        </a>
                    </div>
                </div>
                <div className="content-contact">
                    <h3 className="head-content-contact">call me</h3>
                    <div className="body-content-contact">
                        <a href="https://join.skype.com/invite/qHxc9or0fsDI" target="_blank">
                            <FontAwesomeIcon icon={faSkype}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoxContact;
