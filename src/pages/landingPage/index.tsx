import React from 'react'
import Navbar from '../../Components/Navbar'
import About from '../about'
import Footer from '../footer'
import Home from '../home'

import styles from './landingPage.module.scss'

function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <Navbar />
            <Home />
            <div className={styles.body}>
                <About />
            </div>

            <Footer />
        </div>
    )
}

export default LandingPage
