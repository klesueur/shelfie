import React, {Component} from 'react';
import axios from 'axios' 
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'




class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }  
    this.componentDidMount = this.componentDidMount.bind(this)
 }

 componentDidMount() {
  // console.log('I am mounted!!')
   axios.get('/api/inventory').then(res => {
     console.log(res.data)
     this.setState({
       inventory: res.data,
     })
   })
   .catch(err => console.log(err))
 }


// componentDidUpdate() {
//   axios.post('/api/product').then((res) => {

//   })
// }


  render() {

    return (
      <div>
        <div className='header'>
          <Header />
        </div>

        <div className='body'>
          <Dashboard inventory={this.state.inventory} />
          
          <Form /*addProduct={this.addProduct}*/ 
          updateInventory={this.componentDidMount}
          />

        </div>

      </div>
    )
  }
}

export default App 