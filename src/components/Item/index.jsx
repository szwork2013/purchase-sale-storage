import React, { Component } from 'react';
import styles from './index.scss'

import { Link } from 'react-router'

// 图片加载失败时的默认图片
const imageErr = (e) => {
    e.target.src = 'src/public/images/404.jpg'
}

class Item extends Component {
    render() {
        const {price, title, imgUrl, url} = this.props;
        return (
            <Link to={url} className={styles.root}>

                <div className={styles.itemImg}>
                    <img src={imgUrl} onError={imageErr} />
                </div>

                <div className={styles.itemInfo}>
                    <span className={styles.title}>{title || '商品标题'}</span>
                    <span className={styles.price}>{price || '价格'}</span>
                </div>
            </Link>
        )
    }
}

class OrderItem extends Component {
    render() {
        const {url, imgUrl, title, sku, price, nums } = this.props
        return (
            <Link to={url} className={styles.root} >

                <div className={styles.itemImg}>
                    <img src={imgUrl} onError={imageErr} />
                </div>

                <div className={styles.itemInfo}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.sku}>{sku}</p>
                </div>
                <div className={styles.itemPay}>
                    <p className={styles.price}>{price}</p>
                    <p className={styles.nums}>{nums}</p>
                </div>
            </Link>
        )
    }
}

export default { Item }
export { Item, OrderItem }