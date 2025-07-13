import classNames from 'classnames/bind';

import styles from './Header.scss';
import SubHeader from './SubHeader';
import VS_logo from '~/assets/logo/VS_logo.png';

import subHeaders from '~/configs/subHeaderConfig';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header id={cx('header')}>
            <div id={cx('logo')} className={cx('header-content')}>
                <div className={cx('subnemu')}>
                    {/* VStorm */}
                    <div id={cx('logo-header')}>
                        <img src={VS_logo} alt="logo" />
                    </div>
                </div>
            </div>

            <ul id={cx('menu')} className={cx('header-content')}>
                {subHeaders.map((subHeader, index) => (
                    <SubHeader key={index} {...subHeader} />
                ))}
            </ul>
        </header>
    );
}

export default Header;
