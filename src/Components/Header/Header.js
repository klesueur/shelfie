import React, {Component} from 'react'
import '../../App.css'

export default class Header extends Component {

    render() {

        return (

            <div className='header-shelfie'>
                <img className='shelfie-logo' src='https://raw.githubusercontent.com/DevMountain/simulation-1/master/assets/shelfie_icon.png' alt='shelfie-logo'/>
                <h1 className='shelfie-name'> SHELFIE </h1>
            </div>

        )
    }
}