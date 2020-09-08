import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'


class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: [
        'dummy1', 'dummy2', 'dummy3'
      ]
    }  
 }

  render() {

    return (
      <div>
        <div className='header'>
          <Header />
        </div>

        <div className='body'>
          <Dashboard inventory={this.state.inventory} />
          
          <Form addProduct={this.addProduct} />
        </div>

      </div>
    )
  }
}

export default App 