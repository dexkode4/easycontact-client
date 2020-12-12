import styles from './Navigation.module.scss';

type HamburgerProps = {
    toggleNavMenu: () => void;
    isOpen: Boolean
}


function Hamburger({ toggleNavMenu, isOpen }: HamburgerProps) {
    return (
        <div className={styles.navigation}>
            <input type="checkbox" className={styles.navigation__checkbox} id="navi-toggle" checked={isOpen ? true : false} />
            <label htmlFor="navi-toggle" className={styles.navigation__button} onClick={() => toggleNavMenu()}>
                <span className={styles.navigation__icon}>
                    &nbsp;
                </span>
            </label>
        </div>
    )
}

export default Hamburger
