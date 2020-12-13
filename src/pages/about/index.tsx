import React from 'react'
import FeatureCard from '../../Components/Cards/features';
import styles from './about.module.scss';

import { FEATURES } from './data';




function About() {
    return (
        <div className={styles.about}>
            <div className={styles.aboutHeader}>
                <h1>Why choose Easycontact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore veritatis temporibus similique velit dignissimos quam et. Ullam, libero natus. </p>
            </div>
            <div className={styles.aboutFeatures}>
                {
                    FEATURES.map((feature) => (
                        <FeatureCard title={feature.title} description={feature.description} icon={<feature.icon />} />
                    ))
                }
            </div>
        </div>
    )
}

export default About
