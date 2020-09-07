import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [],
    }

    /*this.addProduct = this.addProduct.bind(this)*/
  }

  // addProduct(name, price, imgurl) {
  //   const id = this.state.inventory[this.state.inventory.length -1].id + 1
  //   const newProduct = {id, name, price, imgurl}
  //   const newArr = [...this.state.inventory, newProduct]

  //   this.setState({
  //     inventory: newArr,
  //   })
  // }

  render() {
    // // const productDisplay = this.state.inventory.map(function (product) {
    // //   return </*ComponentName*/ key={product.id} product={product}
    // })

    return (
      <div>
        <div className='header'>
          <Header />
        </div>

        <div className='body'>
          <Dashboard />
          <Form addProduct={this.addProduct} />
        </div>

      </div>
    )
  }
}

export default App 