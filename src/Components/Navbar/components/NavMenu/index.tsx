import React from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
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
                    {menulinks.map(({ title, link }: { title: string, link: string }, index: number) => (
                        <li className={styles.navmenuLinks} key={index} >
                            {
                                ["signin", "signup"].includes(link) ?
                                    <Link to={`/${link}`} onClick={() => toggleNavMenu()} >{title}</Link>
                                    :
                                    <LinkScroll
                                        activeClass="active"
                                        to={`${link}`}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => toggleNavMenu()}
                                    >
                                        {title}
                                    </LinkScroll>

                            }
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}

export default NavMenu
