import cx from 'classnames';

import { useThemeContext } from '~/contexts/ThemeContext';
import './ContactSection.scss';
import FormContact from './FormContact';
import BoxContact from './BoxContact';

function ContactSection() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <section id="contact" className="section">
            <h1 className={cx('title-section', isLightTheme ? 'light' : 'dark')}>contact</h1>
            <div className={cx('box-contact', isLightTheme ? 'light' : 'dark')}>
                <FormContact />
                <BoxContact />
            </div>
        </section>
    );
}

export default ContactSection;
