import React, {Component} from 'react'
import '../../App.css'
import Product from '../Product/Product'
import App from '../../App.js'


export default class Dashboard extends Component {

    render() {
        const productDisplay = this.state.inventory.map(product => {
            return <Product  />
            })

        return (

            <div>
                Dashboard
            <h2>I am the {this.props.inventory}</h2>
                <Product />
            </div>

        )
    }
}