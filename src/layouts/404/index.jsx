import React, {Component} from 'react';
import {Link} from 'react-router'
import {Icon} from 'components'
import styles from './index.scss'
class NotFoundPage extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Icon icoName="tishi" className={styles.icon} />
                <div>找不到页面</div>
                <Link to="/" className={styles.btn}>
                    回到首页
                </Link>
            </div>
        );
    }
}

export default NotFoundPage;