import React from 'react'
import styles from './feature.module.scss'

type FeatureCardProps = {
    title: string,
    description: string,
    icon?: any;
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className={styles.feature}>
            <div className={styles.featureIcon}>
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureCard
