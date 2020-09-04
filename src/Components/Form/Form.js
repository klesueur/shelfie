import React, {Component} from 'react'
import '../../index.css'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }


    handleImg(URL) {
        this.setState({ name: URL })
    }

    handleName(name) {
        this.setState({ price: name })
    }

    handlePrice(price) {
        this.setState({ imgurl: price })
    }

    handleAddButton() {

    }

    handleCancelButton() {

    }


    render() {

        return (

            <div className='form'>
                
                <div className='img-preview'> IMG Preview </div>
                <div className='input-boxes'>

                    <p className='form-element'>Image URL:</p>
                    <input className='form-element'
                            onChange={e => this.handleImg(e.target.value)}
                            type='text' />

                    <p className='form-element'>Product Name:</p>
                    <input className='form-element' 
                            onChange={e => this.handleName(e.target.value)}
                            type='text' />

                    <p className='form-element'>Price:</p>
                    <input className='form-element' 
                            onChange={e => this.handlePrice(e.target.value)}
                            type='text' />
                    
                </div>
                <div className='buttons'>
                        <button onClick={this.handleAddButton}> Cancel </button>
                        <button onClick={this.handleCancelButton}> Add to Inventory </button>   
                </div>
            </div>

        )
    }
}