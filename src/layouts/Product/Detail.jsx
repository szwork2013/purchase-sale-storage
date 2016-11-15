import React, { Component } from 'react'
import { Link } from 'react-router'
import { NavBar, Icon } from 'components'
import { Footer } from 'containers'
import styles from './index.scss'

class Detail extends Component {
    render() {
        const {params} = this.props
        return (
            <div>
                <NavBar />
                {`id=${params.id}`}
                <BuyBar {...this.props} />
            </div>
        );
    }
}

class BuyBar extends Component {
    constructor() {
        super()
        this.state = {
            isJoinCart: false
        }
    }
    joinCart(e) {
        this.setState({
            isJoinCart: !this.state.isJoinCart
        })
    }
    render() {
        const {params} = this.props
        return (
            <Footer className={styles.footer}>
                <Link
                    to="/"
                    className={styles.bar}
                    >
                    <Icon icoName="shouye" />
                </Link>
                <Link
                    to={`/buy/${params.id}`}
                    className={styles.buy}
                    >
                    购买
                </Link>
                <Link
                    className={styles.bar}
                    onClick={this.joinCart.bind(this)}
                    >
                    <Icon
                        icoName="gouwuche"
                        className={this.state.isJoinCart ? styles.active : ""}
                        />
                </Link>
            </Footer >
        );
    }
}

export default Detail;