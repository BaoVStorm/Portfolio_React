import classNames from 'classnames/bind';
import styles from './Header.scss';
import { scrollPositionById } from '~/utils';

const cx = classNames.bind(styles);

function SubHeader({ id, longContent, shortContent, activeSection }) {
    return (
        <li className={cx('subnemu', { 'highlight-submenu': id === activeSection })}>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();

                    scrollPositionById(id);
                }}
            >
                <span className={cx('long-show-header')}>{longContent}</span>
                <span className={cx('short-show-header')}>{shortContent}</span>
            </a>
        </li>
    );
}

export default SubHeader;
