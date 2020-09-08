import React, {Component} from 'react'
import '../../App.css'



class Product extends Component {
    render() {
        console.log(this.props)
        const {product} = this.props
        return (
            <div className='product-item'>
        
                <img src={product.imgurl} className='product-image' alt={product.name} />
                
                <div>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                </div>

            </div>
        )
    }
}

export default Product