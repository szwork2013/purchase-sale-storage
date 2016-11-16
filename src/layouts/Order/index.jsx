import React, { Component } from 'react'

import { TabBar, OrderItem } from 'components'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderLists: [
                {
                    name: '嘉实多机油保养套餐',
                    url: 'src/public/images/avatar.jpg',
                    sku: '一箱12瓶装',
                    price: 160,
                    nums: 2
                }
            ]
        }
    }
    render() {
        const {orderLists} = this.state
        return (
            <div>
                {
                    orderLists.map((item, index) => {
                        return (
                            <OrderItem
                                key={index}
                                title={item.name}
                                url={`order/view?order_id=${index}`}
                                imgUrl={item.url}
                                price={item.price}
                                sku={item.sku}
                                nums={item.nums}
                                />
                        )
                    })
                }
                <TabBar />
            </div>
        );
    }
}

export default Order;