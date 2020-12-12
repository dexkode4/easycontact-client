import React from 'react'
import Navbar from '../../Components/Navbar'

import styles from './landingPage.module.scss'

function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <Navbar />
            <div className={styles.body}>Hello</div>
        </div>
    )
}

export default LandingPage
