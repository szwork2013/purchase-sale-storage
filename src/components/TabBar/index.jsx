import React, { Component } from 'react'
import styles from './index.scss'

import Bar from './Bar'

export default class TabBar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Bar
                    pathUrl="/"
                    icoName={"shouye"}
                    active={styles.active}
                    linkName="首页"
                    onlyActiveOnIndex
                    />
                <Bar
                    pathUrl="/order"
                    icoName={"wodedingdan"}
                    active={styles.active}
                    linkName="订单"
                    />

                <Bar
                    pathUrl="/account"
                    icoName={"wodejuhuasuan"}
                    active={styles.active}
                    linkName="我的"
                    />
            </div>
        )
    }
} 