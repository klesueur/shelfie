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
  }

  render() {

    return (
      <div>
        <div className='header'>
          <Header />
        </div>

        <div className='body'>
          <Dashboard />
          <Form />
        </div>

      </div>
    )
  }
}

export default App 