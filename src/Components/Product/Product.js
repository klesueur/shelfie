import React, {Component} from 'react'
import '../../App.css'



class Product extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                I am the Child PRODUCT Component.
                <img src={this.props.product.imgurl} className='product-image' alt={this.props.product.name} />
            </div>
        )
    }
}

export default Product