import React, {Component} from 'react'
import '../../App.css'
import Product from '../Product/Product'



export default class Dashboard extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        const productDisplay = this.props.inventory.map((product, index) => {
            console.log(product)
            return <Product key={index} product={product}/>
            })

        return (

            <div>
                I am the Dashboard component.
            <h2>{productDisplay}</h2>
                {/* <Product /> */}
            </div>

        )
    }
}