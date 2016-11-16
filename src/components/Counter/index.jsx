import React, {Component} from 'react'
import styles from './index.scss'
import {Icon} from 'components'
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state.num = 0;
    }

    add(num) {
        return ++num;
    }

    sub(num) {
        return --num;
    }

    render() {
        let {num} = this.state
        return (
            <div className={styles.root}>
                <Icon icoName="minus" className={styles.sub} onClick={this.sub()}></Icon>
                <div className={styles['input-num']}><span>{num}</span></div>
                <Icon icoName="add" className={styles.add} conClick={this.add()}></Icon>
            </div>
        )
    }
}

export default Counter