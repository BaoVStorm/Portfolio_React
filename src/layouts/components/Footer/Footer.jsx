import cx from 'classnames';

import { useThemeContext } from '~/contexts/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

function Footer() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <footer id="footer" className={cx(isLightTheme ? 'light' : 'dark')}>
            <p>
                <span>Copyright</span>
                <span>
                    <FontAwesomeIcon icon={faCopyright} />
                </span>
                <span>2025</span>
                <span>
                    <span className="hightlight-footer">VStorm | TranVuBao</span>. All rights reserved.
                </span>
            </p>
            <p>
                <span className="hightlight-footer">95%</span>
                <span>hand-crafted,</span><span className="hightlight-footer">5%</span>
                <span>AI-assisted.</span>
            </p>
            <p>
                The design was inspired by a template from
                <a href="https://extact.com/" className="hightlight-footer" target="_blank">
                    extact
                </a>
            </p>
        </footer>
    );
}

export default Footer;
