import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} alt="Avatar" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/7043449427415007234.jpeg?x-expires=1653616800&x-signature=kQbQvQ1aTnBReICslY8KaKHqVHc%3D" />
            <div className={cx('info')}>
                <h4 className={cx('name-wrapper')}>
                    <span className={cx('name')}>huytm203</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>huyyy.tm203</p>
            </div>

        </div>
    );
}

export default AccountItem;