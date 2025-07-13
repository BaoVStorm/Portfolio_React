import classNames from 'classnames/bind';
import styles from './Header.scss';

import VS_logo from '~/assets/logo/VS_logo.png';

const cx = classNames.bind(styles);

function LogoHeader() {
    return (
        <div id={cx('logo')} className={cx('header-content')}>
            <div className={cx('subnemu')}>
                {/* VStorm */}
                <div id={cx('logo-header')}>
                    <img src={VS_logo} alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default LogoHeader;
