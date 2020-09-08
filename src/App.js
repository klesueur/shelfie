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
        {
          id: 0,
          name: 'Boots',
          price: 150,
          imgurl: 'https://images.dsw.com/is/image/DSWShoes/443190_100_ss_01?$pdp-image$'
        },
        {
          id: 1,
          name: 'Pendant Necklace',
          price: 100,
          imgurl: 'https://i.etsystatic.com/9939995/d/il/a25557/1056027951/il_340x270.1056027951_pcc6.jpg'
        },
        {
          id: 2,
          name: 'Jersey',
          price: 300,
          imgurl: 'https://images-na.ssl-images-amazon.com/images/I/61OxzF0Ub-L._AC_UL1400_.jpg'
        }
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
          
          <Form /*addProduct={this.addProduct}*/
          />

        </div>

      </div>
    )
  }
}

export default App 