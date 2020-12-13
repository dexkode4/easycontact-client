import React from 'react'

import styles from './home.module.scss';
import { BgIntroMobile, People } from '../../assets/svg'
import Button from '../../Components/Button';


type HomeProps = {
    id: string
}
function Home({ id }: HomeProps) {
    return (
        <div className={styles.home} id={id}>
            <div className={styles.homeSvg}>
                <BgIntroMobile />
                <People className={styles.homeSvgPeople} />
            </div>
            <div className={styles.homeDescription}>
                <h1>Next generation contact app</h1>
                <p>Take your contact list online. Your EasyContact account will be a quick goto for texting, mailing, calling and much more.</p>

                <div className={styles.homeDescriptionCta}>
                    <Button text={"sign up"} route={'signup'} />
                    <Button text={"sign in"} route={'signin'} />
                </div>
            </div>
        </div>
    )
}

export default Home
