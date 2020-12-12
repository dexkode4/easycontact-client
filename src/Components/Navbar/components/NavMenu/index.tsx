import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavMenu.module.scss';

type NavMenuProps = {
    menulinks: { title: string; link: string; }[],
    isOpen: Boolean,
    toggleNavMenu: () => void
}

function NavMenu({ menulinks, isOpen, toggleNavMenu }: NavMenuProps) {
    return (
        <div className={`${styles.overlay} ${isOpen ? styles.overlayShow : ''}`}>
            <div className={`${styles.navmenu} ${isOpen ? styles.navmenushowMenu : ''}`}>
                <ul>
                    {menulinks.map(({ title, link } : {title: string, link:string}, index: number) => (
                        <li className={styles.navmenuLinks} key={index} onClick={() => toggleNavMenu()}><Link to={link} >{title}</Link></li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default NavMenu
