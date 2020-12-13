import React from 'react'
import styles from './footer.module.scss';

import { IconFacebook, IconInstagram, IconTwitter } from '../../assets/svg'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                easycontact
            </div>
        </div>
    )
}

export default Footer
