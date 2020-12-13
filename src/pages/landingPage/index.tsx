import React from 'react'
import Navbar from '../../Components/Navbar'
import Home from '../home'

import styles from './landingPage.module.scss'

function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <Navbar />
            <Home/>
        </div>
    )
}

export default LandingPage
