import React from 'react'
import Logo from '../assets/logo.svg'
import { SectionLinks } from './SectionLinks';
import { SocialLinks } from './SocialLinks';

const NavBar = () => {


    return (

        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <SectionLinks/>
                <SocialLinks parentClass={"nav-icons"} subParentClass={"nav-icon"}/>

            </div>
        </nav >

    )
};


export default NavBar;