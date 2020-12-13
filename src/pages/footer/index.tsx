import React from 'react'
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styles from './footer.module.scss';

import { IconFacebook, IconInstagram, IconTwitter } from '../../assets/svg'


type FooterProps = {
    id: string
}

function Footer({ id }: FooterProps) {
    return (
        <div className={styles.footer} id={id}>
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

                    <li>
                        <LinkScroll
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About us
                    </LinkScroll>
                    </li>
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
