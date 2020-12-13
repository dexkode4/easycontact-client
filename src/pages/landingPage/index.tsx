import React from 'react'
import Navbar from '../../Components/Navbar'
import About from '../about'
import Footer from '../footer'
import Home from '../home'
import {Route} from 'react-router-dom';

import styles from './landingPage.module.scss'

function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <Navbar />
            <Home id={"home"}/>
            <div className={styles.body}>
                <About id={"about"} />
            </div>

            <Footer id={"contact"}/>
        </div>
    )
}

export default LandingPage
