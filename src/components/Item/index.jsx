import React, { Component } from 'react';
import styles from './index.scss'
class Item extends Component {
    render() {
        const dataImg = "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCABkAGQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAQIDAAQI/8QAHRABAQEAAgMBAQAAAAAAAAAAAAECAxIREzEhYf/EABcBAQEBAQAAAAAAAAAAAAAAAAECAAT/xAAXEQEBAQEAAAAAAAAAAAAAAAAAARES/9oADAMBAAIRAxEAPwDzhnKkwbOVc5dUjmtTmDzCsyaZVidRnGaca8yPU4Nc/rD1/wAdXULluW1y3BLxuu5JcjDrk1gmsOvWU9ZFhlctyy1jJw6plTKWVcqiVIeEyeKB4MCDFpEKIVmLSU9JU0p6T0ppPSapOszJI5VynlTJgUh4TJ4qCngwIMWkQohWYtJT0lTTE9J6U0npKk79ZqySOVcp5UyqCqQ8Jk8VAeDAgxSRCiFZi0lPSVNMT0npSp6TVRO/WaskmyplPKmVQKZPCZPCmngwIMWBCiFZi0mj0lTTE9J6U0npKk6zVkkc1XNc2dKZ0ZWsdOaeVzTZ5tUqcdEppXPNm7nRi3kLYl3Du2tilpLYS7Ldi04OqTVC7T1pOmQayV0w1WJy08tZhDTynlrMUjLTeb4ZizdqFtZmBbaFtZgU7aW1mCoS39ZmBf/Z"
        const {price, title, img} = this.props;
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <img className={styles.thumb} src={img || dataImg} />
                </div>
                <div className={styles.right}>
                    <span className={styles.caption}>{title || '描述'}</span>
                    <span className={styles.price}>{price || '价格'}</span>
                </div>
            </div>
        );
    }
}

export default Item;