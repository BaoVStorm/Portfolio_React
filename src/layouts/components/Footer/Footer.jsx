import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

import './Footer.scss';

function Footer() {
    return (
        <footer id="footer">
            <p>
                <span>Copyright</span>
                <span>
                    <FontAwesomeIcon icon={faCopyright} />
                </span>
                <span>
                    2025
                    <span class="hightlight-footer">VStorm | TranVuBao</span>. All rights reserved.
                </span>
            </p>
            <p>
                <span class="hightlight-footer">95%</span>
                <span>hand-crafted</span>,<span class="hightlight-footer">5%</span>
                <span>AI-assisted</span>.
            </p>
            <p>
                The design was inspired by a template from
                <a href="https://extact.com/" class="hightlight-footer" target="_blank">
                    extact
                </a>
            </p>
        </footer>
    );
}

export default Footer;
