import React from 'react'

import styles from './home.module.scss';
import { BgIntroMobile, People } from '../../assets/svg'
import Button from '../../Components/Button';

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.homeSvg}>
                <BgIntroMobile />
                <People className={styles.homeSvgPeople} />
            </div>
            <div className={styles.homeDescription}>
                <h1>Next generation digital banking</h1>
                <p>Take your contact list online. Your EasyContact account will be a quick goto for texting, mailing, calling and much more.</p>

                <Button text={"sign up"} route={'signup'} />
                {/* <Button text={"sign in"} route={'signin'} /> */}
            </div>
        </div>
    )
}

export default Home
