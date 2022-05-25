import styles from './Button.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    outline = false,
    primary = false,
    text = false,
    rounded = false,
    children,
    icon,
    onClick,
    disable = false,
    ...passProps }) {

    let Comp = 'button';
    const props = {
        onClick,
    };
    if (disable) {
        delete props.onClick;
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disable,
        rounded
    });

    return (
        <Comp className={classes} {...props} {...passProps}>
            {icon && <span className={cx('left-icon')}>{icon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;