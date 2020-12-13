import React, { useState } from 'react';
import Hamburger from './components/Hamburger';
// import { Logo } from '../../assets/svg';
import styles from './Navbar.module.scss';
import NavMenu from './components/NavMenu';

const MenuLinks = [
    {
        title: 'Home',
        link: 'home'
    },
    {
        title: 'About',
        link: 'about'
    },
    {
        title: 'Contact',
        link: 'contact'
    },
    {
        title: 'Signup',
        link: 'signup'
    },
    {
        title: 'Signin',
        link: 'signin'
    },
]



function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavMenu = (): any => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.navbarLogo}>
                    <span>easycontact</span>
                </div>
                <Hamburger toggleNavMenu={toggleNavMenu} isOpen={isOpen} />
            </div>

            <NavMenu menulinks={MenuLinks} isOpen={isOpen} toggleNavMenu={toggleNavMenu} />
        </>
    )
}

export default Navbar
