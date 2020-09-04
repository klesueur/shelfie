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

    render() {

        return (

            <div className='form'>
                
                <div className='img-preview'> IMG Preview </div>
                <div className='input-boxes'>
                    <p className='form-element'>Image URL:</p>
                    <input className='form-element' type='text' />
                    <p className='form-element'>Product Name:</p>
                    <input className='form-element' type='text' />
                    <p className='form-element'>Price:</p>
                    <input className='form-element' type='text' />
                    
                </div>
                <div className='buttons'>
                        <button> Cancel </button>
                        <button> Add to Inventory </button>   
                </div>
            </div>

        )
    }
}