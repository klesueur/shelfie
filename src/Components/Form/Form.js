import React, {Component} from 'react'
import '../../App.css'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleCancelButton = this.handleCancelButton.bind(this)
    }


    // handleImg(url) {
    //     this.setState({ name: url })
    // }

    // handleName(name) {
    //     this.setState({ price: name })
    // }

    // handlePrice(price) {
    //     this.setState({ imgurl: price })
    // }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleCancelButton() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const {name, price, imgurl} = this.state
        this.props.updateInventory(name, price, imgurl)
    }

    addProduct(newProduct) {
        axios.post('/api/product', newProduct)
        .then(res => {
            this.setState({
                name: res.data,
                price: res.data,
                imgurl: res.data
            })
        })
        .catch(err => console.log(err))
    }


    render() {

        return (

            <form  className='form'>
                
                <div className='img-preview'> IMG Preview </div>
                <div className='input-boxes'>

                    <p className='form-element'> Image URL: </p>
                    <input className='form-element'
                           onChange={this.handleChange} name='imageurl' />

                    <p className='form-element'> Product Name: </p>
                    <input className='form-element' 
                           onChange={this.handleChange} name='name' />

                    <p className='form-element'> Price: </p>
                    <input className='form-element' 
                           onChange={this.handleChange} name='price' />
                    
                </div>
                <div className='buttons'>
                        <button onClick={this.handleCancelButton}> Cancel </button>
                        <button type='submit' onSubmit={e => this.handleSubmit(e)} > Add to Inventory </button>   
                </div>
            </form>

        )
    }
}