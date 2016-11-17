import React, {Component} from 'react';
import {Link} from 'react-router'

import {Icon,Stepper} from 'components'
import styles from './index.scss'
import errImg from '../../public/images/404.jpg'
// 图片加载失败时的默认图片
const imageErr =(e)=>{
    e.target.src == errImg?null:e.target.src = errImg
}

class Item extends Component {
    render() {
        const {price, title, imgUrl, url} = this.props;
        return (
            <Link to={url} className={styles.root}>

                <div className={styles.itemImg}>
                    <img src={imgUrl} onError={imageErr}/>
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
        const {url, imgUrl, title, sku, price, nums} = this.props
        return (
            <Link to={url} className={styles.root}>

                <div className={styles.itemImg}>
                    <img src={imgUrl} onError={imageErr}/>
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


class CartItem extends Component {
    render() {
        return (
            <div className={styles.cartItemRoot}>
                <div className={styles.choose}>
                    <input type="checkbox"/>
                </div>
                <Link to="/product/view" className={styles.itemImg}>
                    <img src="/src/public/images/404.jpg" alt="" onError={imageErr}/>
                </Link>
                <div className={styles.itemInfo}>
                    <p className={styles.name}>
                        嘉实多
                    </p>
                    <p className={styles.price}>
                        售价：799元 合计：799元
                    </p>
                    <div className={styles.num}>
                        <Stepper />
                        <Icon icoName="lajixiang" className={styles.delete}/>
                    </div>
                </div>
            </div>
        )
    }
}



export default {Item}
export {Item, OrderItem, CartItem}