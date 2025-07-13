import classNames from 'classnames/bind';

import styles from './BoxBar.scss';

const cx = classNames.bind(styles);

function BoxBar() {
    return (
        <div className={cx('box-bar')}>
            <div className={cx('menu-bar')}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className={cx('dark-light-bar', 'switch-light')}>
                <div className={cx('switch-padding')}>
                    <div className={cx('switch-bar', 'switch-light')}>
                        <div className={cx('switch-bar-dark')}></div>
                    </div>
                </div>
                <div className={cx('switch-border')}></div>
            </div>
        </div>
    );
}

export default BoxBar;
