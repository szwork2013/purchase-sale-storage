import React, {Component} from 'react'
import {Link} from 'react-router'
import {NavBar, TabBar, Icon} from 'components'
import  {Footer} from 'containers'
import {isEmptyObject} from '../../public/js/Util/'
import styles from './index.scss'

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            model: {
                cart: [
                    {a: 1}
                ]
            }
        }
    }

    render() {
        if (isEmptyObject(this.state.model)) {
            return (
                <div>
                    <NavBar title="购物车"/>
                    <Emp />
                    <TabBar />
                </div>
            )
        } else {
            return (
                <div>
                    <NavBar title="购物车"/>
                    <CommitBar {...this.state} />
                </div>
            )
        }
    }
}

class Emp extends Component {
    render() {
        return (
            <div className={styles.emp}>
                <Icon icoName="tishi" className={styles.icon}/>
                <Link to="/">
                    返回首页
                </Link>
                <Link>
                    全部商品
                </Link>
            </div>
        )
    }
}

class CommitBar extends Component {
    render() {
        return (
            <Footer>
                <div className={styles.price}>
                    <span>共1件 金额:</span>
                    <span>
                        <strong style={{color: `red`, fontSize: `.4rem`}}>799</strong>
                        元
                    </span>
                </div>
                <Link to="/" className={styles.btnDisable}>
                    继续购买
                </Link>
                <Link to="/order/checkout" className={styles.btn}>
                    去结算
                </Link>
            </Footer>
        );
    }
}

export default Cart;