// Create Navigation
import React from 'react'
import { CiLight } from "react-icons/ci";
import ProfileImage from '../Images/logo.png'

const Navbar = () => {
    return (
        <div>
            <div className="sidenav">
                <div className='mainProfile'>
                    <div className='profile'>
                        <img src={ProfileImage} alt="ProfileImage" />
                    </div>
                </div>


                <div className='settings'>
                    <CiLight className='light' />
                    <div className='horzintal' ></div>
                    <div className='profile'>
                        <img src={ProfileImage} alt="ProfileImage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar