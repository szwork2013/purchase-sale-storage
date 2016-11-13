import React, { Component } from 'react'

import { NavBar } from '../../components'
import { Footer } from '../../containers'
class Detail extends Component {
    render() {
        return (
            <div>
                {console.log(this.props)}
                <NavBar />
                ProductDetail
            </div>
        );
    }
}

export default Detail;