import React from 'react'
import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

import { IconFacebook, IconInstagram, IconTwitter } from '../../assets/svg'


function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                easycontact
            </div>

            <div className={styles.footerSocial}>
                <IconFacebook className={styles.footerSocialIcon} />
                <IconInstagram className={styles.footerSocialIcon} />
                <IconTwitter className={styles.footerSocialIcon} />
            </div>

            <nav>
                <ul>
                    <li> <Link to="/about">About us</Link></li>
                    <li> <Link to="/contact">contact</Link> </li>
                    <li> <Link to="/support">support</Link></li>
                    <li> <Link to="/privacy">privacy policy</Link> </li>
                </ul>
            </nav>

            <p>&copy; Easycontact. All Rights Reserved</p>
        </div>
    )
}

export default Footer
