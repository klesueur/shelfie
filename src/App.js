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
 }

 componentDidMount() {
  // console.log('I am mounted!!')
   axios.get('/api/inventory').then(res => {
     console.log(res.data)
     this.setState({
       inventory: res.data,
     })
   })
   
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
          />

        </div>

      </div>
    )
  }
}

export default App 