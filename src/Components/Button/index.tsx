import React from 'react'
import styles from './Button.module.scss';
import {useHistory} from 'react-router-dom'

type ButtonProps = {
    text: string,
    route?: string,
}


function Button({text, route}: ButtonProps) {
    const history = useHistory();
    return (
        <div className={styles.button}
        onClick={() => {
            history.push(`/${route}`)
        }}>
            <span>{text}</span>
        </div>
    )
}

export default Button
