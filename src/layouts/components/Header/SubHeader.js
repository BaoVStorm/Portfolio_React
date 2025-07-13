import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function SubHeader({ id, longContent, shortContent }) {
    {
        /* <li className="subnemu highlight-submenu"> */
    }

    return (
        <li className={cx('subnemu')}>
            <a href={`#${id}`}>
                <span className={cx('long-show-header')}>{longContent}</span>
                <span className={cx('short-show-header')}>{shortContent}</span>
            </a>
        </li>
    );
}

export default SubHeader;
