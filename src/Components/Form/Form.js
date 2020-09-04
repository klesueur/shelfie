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
                Form
            </div>

        )
    }
}