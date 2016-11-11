import React, { Component } from 'react';
import styles from './index.scss'

import { Link } from 'react-router'

class Item extends Component {
    imageErr(e) {
        e.target.src = 'src/public/images/404.jpg'
    }
    render() {
        const {price, title, img, url} = this.props;
        return (
            <Link to={url} className={styles.root}>
                <div className={styles.left}>
                    <img className={styles.thumb} src={img} onError={this.imageErr} />
                </div>
                <div className={styles.right}>
                    <span className={styles.caption}>{title || '描述'}</span>
                    <span className={styles.price}>{price || '价格'}</span>
                </div>
            </Link>
        )
    }
}

export default Item;