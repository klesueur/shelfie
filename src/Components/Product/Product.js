import React, {Component} from 'react'
import '../../App.css'



class Product extends Component {
    render() {
        console.log(this.props)
        const {product} = this.props
        return (
            <div className='product-item'>
        
                <img src={product.imgurl} className='product-image' alt={product.name} />

                <div className='product-details'>
                    <p className='product-name'>{product.name}</p>
                    <p className='product-price'>{product.price}</p>
                </div>

            </div>
        )
    }
}

export default Product